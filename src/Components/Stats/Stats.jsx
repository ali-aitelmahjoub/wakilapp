import React from "react";
import "./stats.css";
import { motion } from "framer-motion";
import imgsl from "../../img/img6.jpg";

export const Stats = () => {
  return (
    <div className="statsContainer" id="About">
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        initial={{ x: -300, opacity: 0 }}
        className="statsLeft"
      >
        <img className="statsImg" src={imgsl} />
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        initial={{ x: 300, opacity: 0 }}
        className="statsRight"
      >
        <h1 className="statsTitle">We provide you the best experience</h1>
        <p className="statsText">
          Lorem ipsum dolor hgggggg sit, amet consectetur adipisicing elit.
          Repellendus harum vel facilis iure, doloribus pariatur reprehenderit
          sunt? Hic, sed iure nemo voluptates earum incidunt accusamus
          consectetur. Ducimus quas ex eum!
        </p>
        <div className="statsDataContainer">
          <div className=" dataWrap dataYear">
            <span className="data">+15</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-user-tie"></i>
              </span>
              <span className="word">YEARS EXPERIENCE</span>
            </div>
          </div>
          <div className="dataWrap dataClient">
            <span className="data">+1423</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-star"></i>
              </span>
              <span className="word">SATIFIED CUSTOMER</span>
            </div>
          </div>
          <div className="dataWrap dataSolde">
            <span className="data">+876</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-check"></i>
              </span>
              <span className="word">SOLD!</span>
            </div>
          </div>
          <div className="dataWrap dataHours">
            <span className="data">+1647</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-phone"></i>
              </span>
              <span className="word">HOURS ON MONTHS</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

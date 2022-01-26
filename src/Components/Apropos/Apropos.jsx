import React from "react";
import "./apropos.css";
import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="aproposContainer" id="Apropos">
      <div className="aproposWrap">
        <div className="box info">
          <h2 className="miniTitle item1">Oue Service</h2>
          <h1 className="infoTitle">What We Offre</h1>
          <p className="infoPara">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          className="box aproposItem"
        >
          <h1 className="infoLogo item">
            <i className="fas fa-book-open"></i>
          </h1>
          <h2 className="boxTitle item">OPTIMISEZ VOTRE AGENDA</h2>
          <p className="boxPara item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="box aproposItem"
        >
          <h1 className="infoLogo item">
            <i className="fas fa-atom"></i>
          </h1>
          <h2 className="boxTitle item">PAS D'ENGAGEMENT</h2>
          <p className="boxPara item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="box aproposItem"
        >
          <h1 className="infoLogo item">
            <i className="fas fa-gift"></i>
          </h1>
          <h2 className="boxTitle item">RELATION PRIVILÉGIÉE</h2>
          <p className="boxPara item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="box aproposItem"
        >
          <h1 className="infoLogo item">
            <i className="fas fa-book-open"></i>
          </h1>
          <h2 className="boxTitle item">OPTIMISEZ VOTRE AGENDA</h2>
          <p className="boxPara item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="box aproposItem"
        >
          <h1 className="infoLogo item">
            <i className="fas fa-book-open"></i>
          </h1>
          <h2 className="boxTitle item">OPTIMISEZ VOTRE AGENDA</h2>
          <p className="boxPara item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Apropos;

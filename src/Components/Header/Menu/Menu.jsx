import React from "react";
import "./menu.css";
import { motion } from "framer-motion";
import Logo from "../../logo/Logo";

export const Menu = () => {
  const animationStyle = { scale: 1.1, borderBottom: "2px solid #fff" };
  return (
    <div>
      <div className="headre-container">
        <div className="headre-wraper">
          <div className="headre-left">
            <h1 className="logo">
              <Logo />
            </h1>
          </div>
          <div className="headre-right">
            <ul className="headre-Menu">
              <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#">
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#About">
                  About us
                </a>
              </motion.li>
              <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#Apropos">
                  Apropos
                </a>
              </motion.li>

              {/* <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#">
                  Team
                </a>
              </motion.li> */}
              <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#Offres">
                  Services
                </a>
              </motion.li>
              <motion.li whileHover={animationStyle} className="menuList">
                <a className="lien" href="#Contact">
                  Contact us
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

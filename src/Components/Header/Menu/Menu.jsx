import React from 'react';
import './menu.css'
import { motion } from 'framer-motion';
import Logo from '../../logo/Logo';

export const Menu = () => {
  const animationStyle = {scale:1.1,borderBottom:'2px solid #fff'};
  return <div>
    <div  className='headre-container'>
            <div className="headre-wraper">
                <div className="headre-left">
                    <h1 className="logo"><Logo/></h1>
                </div>
                <div className="headre-right">
                <ul className="headre-Menu">
                        <motion.li
                        whileHover={animationStyle}
                        className="menuList">Home</motion.li>
                        <motion.li 
                          whileHover={animationStyle}
                        className="menuList">Features</motion.li>
                        <motion.li
                          whileHover={animationStyle}
                        className="menuList">About</motion.li>
                        <motion.li 
                          whileHover={animationStyle}
                        className="menuList">Team</motion.li>
                        <motion.li 
                          whileHover={animationStyle}
                        className="menuList">Services</motion.li>
                        <motion.li 
                          whileHover={animationStyle}
                        className="menuList">Contact</motion.li>
                    </ul>
                    </div>
            </div>
           
        </div>
  </div>
};

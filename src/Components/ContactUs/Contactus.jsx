import React from 'react';
import './contactus.css'
import { motion } from 'framer-motion';
import contactusImg from '../../img/img4.jpg'


const Contactus = () => {
return <div className='contactUsContainer'>
            
                    <div className="contactUsWrap">
                        <div className="left">
                            <div className="topLeft">
                                <h1 className='contactus-tile'>CONTACT US</h1>
                                <p className='contactus-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi id dolorum expedita.</p>
                            </div>
                            <form className="boottomLeft">
                               <motion.div
                               whileInView={{y:0,opacity:1}}
                               initial={{y:100,opacity:0}}
                               transition={{delay:1,duration:1}}
                               className="firstBlock block">
                               <input type="text" className='txt-nom txt' placeholder='Votre Nom' />
                                <input type="text" className='txt-prenom txt' placeholder='Votre Prenom' />
                               </motion.div>

                                  <motion.div 
                                   whileInView={{y:0,opacity:1}}
                                   initial={{y:100,opacity:0}}
                                   transition={{delay:1,duration:1.3}}
                                  className="secondBlock block">
                                  <input type="email" className='txt-email txt' placeholder='Votre email' />
                                  <input type="tel" className='txt-tel txt' placeholder='Votre Numero de telephone' />
                                </motion.div>

                

                                <motion.div
                                 whileInView={{y:0,opacity:1}}
                                 initial={{y:100,opacity:0}}
                                 transition={{delay:1,duration:1.7}}
                                className="thirdBlock block">
                                <input type="text" className='txt-agence txt' placeholder='Agence ou resau'/>
                                <input type="number" className='rdv-souhaite txt' placeholder='nombre de Rendez-vous souhautes' />
                                </motion.div>

                                <motion.textarea
                                 whileInView={{y:0,opacity:1}}
                                 initial={{y:100,opacity:0}}
                                 transition={{delay:1,duration:1.9}}
                                className='txt-besoin txt block' id="" cols="30" rows="10" placeholder='Besoin specifiques'></motion.textarea>
                               
                                <motion.button
                                 whileInView={{y:0,opacity:1}}
                                 initial={{y:70,opacity:0}}
                                 transition={{delay:1,duration:2.4}}
                                type="submit" className='btn-submit block'>Envoyer</motion.button>
                            </form>
                        </div>
                        <div className="right">
                            <h1 className='contactUsLogo item'>WAKIL</h1>
                            <p className='contactUsInfo item'><i class="fas fa-phone-alt"></i> (+212)6467646765</p>
                            <p className='contactUsInfo item'><i class="fas fa-paper-plane"></i> #####@gmail.com</p>
                            <p className='contactUsInfo item'><i class="far fa-clock"></i> Lundi - vendredi: 09h - 18h Samedi: 09h - 13h</p>
                        </div>
                    </div>
    </div>;
};

export default Contactus;

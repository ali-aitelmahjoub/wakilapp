import Packoffre from './PackOffre/Packoffre';
import './packsSection.css'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1gold from '../../img/img4.jpg'
import img2gold from '../../img/img5.jpg'
import gold from '../../img/Gold.png'
import bronze from '../../img/Bronze.png'
import silver from '../../img/Silver.png'






const PacksSection = () => {

    const tabs=[{label:'Bronze',icon:<i className="fas fa-crown"></i>},{label:'Gold',icon:<i className="fas fa-crown"></i>},{label:'Silver',icon:<i className="fas fa-crown"></i>}]

    const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  
    

  return <div className="packsSection">


  <div className="window">
   
  <nav>
      <ul className='packSelction'>
  {tabs.map((item) => (
            <li
              key={item.label}
              className={`packSelctionItem ${item.label === selectedTab ? "selected" : ""}`}
              onClick={() => setSelectedTab(item.label)}
            >
               {item.label}
              {item.label === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
          </ul>
  </nav>


        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ==='Gold'?
            <div>
              <h1 className='packTitle Golds'> <i className="fas fa-crown"></i> Les Packs Golds </h1>
              <p className='packDisc'>Un prix !! non un investissement qui rapporte minimum 25 ventes sur 30 ou 40 RDV .. des pros qui prennent le temps de comprendre vos besoins.</p>
              <div className='packsShow'>
            <Packoffre type={'Golds'} imgSource={img1gold} originalPrix={'1500'} discount={'840'} RdvPlus={'3'} RdvTimes={30}  hide={true} />
            <Packoffre type={'Golds'} imgSource={img2gold} originalPrix={2000} discount={1120} RdvPlus={40} RdvTimes={40} icon={gold} hide={false}/>
            </div> 
            </div>
          : 
            selectedTab ==='Silver'? 
            <div>
            <h1 className='packTitle Silvers'> <i className="fas fa-crown"></i> Les Packs Silver </h1>
            <p className='packDisc'>Boostez votre activité et restez toujours sur terrain, car c'est nous qui allons s'occuper de votre prospection et votre agenda RDV.</p>
            <div className='packsShow'>
                  <Packoffre type={'Silvers'} imgSource={img1gold} originalPrix={'1500'} discount={'840'} RdvPlus={'3'} RdvTimes={30} icon={<i class="fas fa-crown"></i>} hide={true} />
                <Packoffre type={'Silvers'} imgSource={img2gold} originalPrix={2000} discount={1120} RdvPlus={40} RdvTimes={40} icon={silver} hide={false}/>
            </div>
            </div>: 
            selectedTab ==='Bronze'?
            <div>
            <h1 className='packTitle Bronzes'> <i className="fas fa-crown"></i> Les Packs Bronze </h1>
            <p className='packDisc'>Un investisement à petit prix afin de bloquer le secteur pour vous avec des mandats sur mesure selon vos besoins.</p>
            <div className='packsShow'>
                 <Packoffre type={'Bronzes'} imgSource={img1gold} originalPrix={'1500'} discount={'840'} RdvPlus={'3'} RdvTimes={30} icon={<i class="fas fa-crown"></i>} hide={true} />
                <Packoffre type={'Bronzes'} imgSource={img2gold} originalPrix={2000} discount={1120} RdvPlus={40} RdvTimes={40} icon={bronze} hide={false}/>
            </div>
            </div>:
             "😋"}
          </motion.div>
        </AnimatePresence>
        </div>
  </div>;
};

export default PacksSection;

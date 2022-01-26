import "./offres.css";
import { useState } from "react";
import PackOffreV2 from "./PackOffreV2/PackOffreV2";
import { motion, AnimatePresence } from "framer-motion";
const Offres = () => {
  const type = ["Bronze", "Gold", "Silver"];
  const [selectedoffre, setSelectedoffre] = useState(type[0]);

  return (
    <div className="offreSection" id="Offres">
      <div className="offres">
        <nav>
          <ul className="packSelction">
            {type.map((item) => (
              <li
                key={item}
                className={`packSelctionItem ${
                  item === selectedoffre ? "selected" : ""
                }`}
                onClick={() => setSelectedoffre(item)}
              >
                {item}
                {item === selectedoffre ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedoffre}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedoffre === "Bronze" ? (
              <div className="offrePack">
                <div className="offreCard offreRight">
                  <PackOffreV2
                    type={"BronzeR"}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    itemType={"silverItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
                <div className="offreCard offreCentre">
                  <PackOffreV2
                    type={"BronzeC"}
                    taller={true}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={false}
                    mask={false}
                    taller={true}
                    crownType={"BcrownType"}
                  />
                </div>
                <div className="offreCard offreLeft">
                  <PackOffreV2
                    type={"BronzeL"}
                    Price={14}
                    RDV={20}
                    skyBac={"whiteBack"}
                    skyCol={"whiteColor"}
                    blackBtn={"btnBlack"}
                    itemType={"bronzeItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
              </div>
            ) : selectedoffre === "Gold" ? (
              <div className="offrePack">
                <div className="offreCard offreRight">
                  <PackOffreV2
                    type={"GoldR"}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    itemType={"silverItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
                <div className="offreCard offreCentre">
                  <PackOffreV2
                    type={"GoldC"}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={false}
                    mask={false}
                    taller={true}
                    crownType={"GcrownType"}
                  />
                </div>
                <div className="offreCard offreLeft">
                  <PackOffreV2
                    type={"GoldL"}
                    Price={14}
                    RDV={20}
                    skyBac={"whiteBack"}
                    skyCol={"whiteColor"}
                    blackBtn={"btnBlack"}
                    itemType={"bronzeItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
              </div>
            ) : selectedoffre === "Silver" ? (
              <div className="offrePack">
                <div className="offreCard offreRight">
                  <PackOffreV2
                    type={"SilverR"}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    itemType={"silverItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
                <div className="offreCard offreCentre">
                  <PackOffreV2
                    type={"SilverC"}
                    Price={14}
                    RDV={20}
                    skyBac={"blackBack"}
                    skyCol={"blackCol"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={false}
                    mask={false}
                    taller={true}
                    crownType={"ScrownType"}
                  />
                </div>
                <div className="offreCard offreLeft">
                  <PackOffreV2
                    type={"SilverL"}
                    Price={14}
                    RDV={20}
                    skyBac={"whiteBack"}
                    skyCol={"whiteColor"}
                    blackBtn={"btnBlack"}
                    itemType={"bronzeItem"}
                    mobilier={"9000$"}
                    objects1={"50$"}
                    objects2={"3000$"}
                    hide={true}
                    mask={true}
                    taller={false}
                  />
                </div>
              </div>
            ) : (
              "empty"
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
{
  /* 
        <div className="offres">
           <div className="offreCard offreRight"> <PackOffreV2 type={'Silver'} Price={14} RDV={20} skyBac={'blackBack'} skyCol={'blackCol'} itemType={'silverItem'} mobilier={'9000$'} objects1={'50$'} objects2={'3000$'} hide={true}/> </div>
           <div className="offreCard offreCentre"> <PackOffreV2 type={'Golde'} Price={14} RDV={20} skyBac={'blackBack'} skyCol={'blackCol'}  mobilier={'9000$'} objects1={'50$'} objects2={'3000$'} /> </div>
           <div className="offreCard offreLeft"> <PackOffreV2 type={'Bronze'} Price={14} RDV={20} skyBac={'whiteBack'} skyCol={'whiteColor'} blackBtn={'btnBlack'} itemType={'bronzeItem'} mobilier={'9000$'} objects1={'50$'} objects2={'3000$'} hide={true}/></div>
        </div> */
}

export default Offres;

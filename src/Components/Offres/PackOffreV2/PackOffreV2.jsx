import "./packoffrev2.css";
const PackOffreV2 = ({
  type,
  taller,
  hide,
  Price,
  RDV,
  skyBac,
  skyCol,
  itemType,
  mobilier,
  objects1,
  objects2,
  blackBtn,
  mask,
  crownType,
}) => {
  return (
    <div className={`PackOffreV2 ${type} ${taller && "tallre"}`}>
      <div className="offreWrap">
        <label className={`populair ${hide && "hide"}`}>Populaire</label>
        <i
          className={`fas fa-crown offreIcon ${mask && "mask"} ${crownType}`}
        ></i>
        <h2 className={`PrixOffre ${skyCol}`}>{type}</h2>
        <div className={`priceTag ${skyCol}`}>
          <h1 className="Price">
            <span className="euro">$</span>
            {Price}
          </h1>
          <p>Pack {RDV} Rendez-Vous Qualifiés</p>
        </div>

        <button className={`offreBtn ${skyBac} ${skyCol} ${blackBtn}`}>
          Choisir cette offre
        </button>

        <div className={`offreMidle ${skyCol}`}>
          <legend>Converture</legend>
          <ul className="converturelist">
            <li className={`convertureItem ${itemType}`}>
              <p>Mobilier</p>
              <span>{mobilier}</span>
            </li>
            <li className={`convertureItem ${itemType}`}>
              <p>Objets</p>
              <span>{objects1}</span>
            </li>

            <li className={`convertureItem ${itemType}`}>
              <p>Objets</p>
              <span>{objects2}</span>
            </li>
          </ul>
        </div>
        {/* <div className={`offreBottom ${skyCol}`}>
          <p className="offreBottomFirstChild">Couverture</p>
          <p>lorem ipsomdd</p>
          <p>lorem ipsomdd</p>
          <p>lorem ipsomdd</p>
          <p>lorem ipsomdd</p>
        </div> */}
      </div>
    </div>
  );
};

export default PackOffreV2;

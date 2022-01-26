import "./logo.css";
import iconLogo from "../../img/logoImg.svg";

const Logo = () => {
  return (
    <a className="lien" href="#">
      <div className="logo">
        <img className="iconLogo" src={iconLogo} />
        <div className="rightLogo">
          <h1 className="topLogo">WAKIL</h1>
          <p className="bottomLogo">immobilier</p>
        </div>
      </div>
    </a>
  );
};

export default Logo;

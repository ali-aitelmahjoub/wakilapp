import './packoffre.css'


const Packoffre = ({type,imgSource,originalPrix,discount,RdvPlus,RdvTimes,hide,icon}) => {
  return <div className={`packoffre  `}>
      <div className="top">
      <img className='packImg' src={imgSource} />
        <div className={`prixLabel ${type}`}>
            <span className="grayColor">{originalPrix}</span>
            <span>{discount}</span>
            <span>euros</span>
        </div>
        <div className={`Rdv ${type}`}>
       <h2>+{RdvPlus} RDV Offert</h2>
        </div>
      </div>

      <div className="bottom">
        <h1 className={`bottomTitle ${type}`}>Pack {RdvTimes} Rendez-Vous Qualifiés</h1>
        <div className='bottomItems'>
        <img className={`show ${hide && 'hide'} `} src={icon} />
          
            <button className={`btn ${type}`}>Commendez</button>
        </div>
      </div>
      
  </div>;
};

export default Packoffre;

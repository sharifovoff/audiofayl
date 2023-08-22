import {NavLink} from "react-router-dom"
import CardImg from "../../assets/cardImg1.png";
import CardImg2 from "../../assets/cardImg2.png";
import CardImg3 from "../../assets/cardImg3.png";
import ArrowIcon from "../../assets/arrow.png";
function Card() {
  return (
     <div className="cards ">
      <div className="card">
        <div className="card-img">
          <img src={CardImg} alt="card-img" className="cards-img__image" />
        </div>
        <div className="card-title">HEADPHONES</div>
        <NavLink className="card__link" to="">
          Shop <img src={ArrowIcon} alt="arrow" width="5" height="10" />
        </NavLink>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={CardImg2} alt="card-img" className="cards-img__image" />
        </div>
        <div className="card-title">HEADPHONES</div>
        <NavLink className="card__link" to="">
          Shop <img src={ArrowIcon} alt="arrow" width="5" height="10" />
        </NavLink>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={CardImg3} alt="card-img" className="cards-img__image" />
        </div>
        <div className="card-title">HEADPHONES</div>
        <NavLink className="card__link" to="">
          Shop <img src={ArrowIcon} alt="arrow" width="5" height="10" />
        </NavLink>
      </div>
    </div>
  );
}

export default Card;

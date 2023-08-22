import { NavLink } from "react-router-dom";
import "./Home.css";

//img import
import HeroImg from "../../assets/Bitmap.png";
import CardImg from "../../assets/cardImg1.png";
import CardImg2 from "../../assets/cardImg2.png";
import CardImg3 from "../../assets/cardImg3.png";

import ArrowIcon from "../../assets/arrow.png";

function Home() {
  return (
    <div className="home">
      <div className="wrap">
        <div className="home__container container ">
          <div className="hero">
            <div className="left">
              <div className="hero-item">NEW PRODUCT</div>
              <div className="hero-title">XX99 Mark II Headphones</div>
              <p className="hero-text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="heroBtn">See Product</button>
            </div>
            <div className="right">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
        <div className="cards container">
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
      </div>
    </div>
  );
}

export default Home;

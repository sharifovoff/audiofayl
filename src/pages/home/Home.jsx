import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import AudioGear from "../../components/audioGear/AudioGear";
import "./Home.css";

//img import
import HeroImg from "../../assets/Bitmap.png";

import SpeakerImg1 from "../../assets/speaker.png";
import SpeakerImg2 from "../../assets/basss.png";
import Earphones from "../../assets/earphones.png";

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
        <Card />
        <div className="container">
          <div className="speaker-zx9">
            <div className="left">
              <img src={SpeakerImg1} alt="" />
            </div>
            <div className="right">
              <div className="spaker-zx9__title">
                ZX9 <br /> SPEAKER
              </div>
              <div className="spaker-zx9__text">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </div>
              <button className="speaker-zx9__btn">See Product</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="speaker-zx7 ">
            <div className="speaker-zx7__item">
              <div className="apeaker-zx7__title">ZX7 SPEAKER</div>
              <button className="speaker-zx7__btn">See Product</button>
            </div>
            <div className="spaker-zx7__img">
              <img src={SpeakerImg2} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="earhones">
            <div className="earphones-img">
              <img src={Earphones} alt="Earphones" />
            </div>
            <div className="earphones-item">
             <div className="earphones-wrap">
             <div className="earphones-item__title">
              YX1 EARPHONES
              </div>
              <div className="earphones-item__btn">
              See Product
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="container">
          <AudioGear/>
        </div>
      </div>
    </div>
  );
}

export default Home;

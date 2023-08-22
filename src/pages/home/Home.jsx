import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Home.css";

//img import
import HeroImg from "../../assets/Bitmap.png";



import SpeakerImg1 from "../../assets/speaker.png";
import SpeakerImg2 from "../../assets/basss.png";

function Home() {
  return (
    <div class="home">
      <div class="wrap">
        <div class="home__container container ">
          <div class="hero">
            <div class="left">
              <div class="hero-item">NEW PRODUCT</div>
              <div class="hero-title">XX99 Mark II Headphones</div>
              <p class="hero-text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button class="heroBtn">See Product</button>
            </div>
            <div class="right">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
       <Card/>
       <div class="container">
       <div class="speaker-zx9">
          <div class="left">
            <img src={SpeakerImg1} alt="" />
          </div>
          <div class="right">
            <div class="spaker-zx9__title">ZX9 <br /> SPEAKER</div>
            <div class="spaker-zx9__text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </div>
            <button class="speaker-zx9__btn">See Product</button>
          </div>
        </div>
       </div>
        <div class="container">
        <div class="speaker-zx7 ">
          <div class="speaker-zx7__item">
            <div class="apeaker-zx7__title">
            ZX7 SPEAKER
            </div>
            <button class="speaker-zx7__btn">
            See Product
            </button>
          </div>
          <div class="spaker-zx7__img">
            <img src={SpeakerImg2} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

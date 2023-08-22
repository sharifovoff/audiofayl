import "./AuidoGer.css";
import AuidoImg from "../../assets/AudioImg.png";

function AudioGear() {
  return (
    <div className="audioGer">
      <div className="left">
        <div className="audio-title">Bringing you the <span className="audio-best">best</span> audio gear</div>
        <div className="audio-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </div>
      </div>
      <div className="audio-right">
        <img src={AuidoImg} alt="AuidoImg" />
      </div>
    </div>
  );
}

export default AudioGear;

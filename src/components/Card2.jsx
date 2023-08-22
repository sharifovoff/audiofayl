import "./card2.css";
import { Link } from "react-router-dom";
function Card2({ url, span, h1, p, to }) {
  return (
    <div className="cardd2">
      <div className="cardd-right2">
        <span>{span}</span>
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link to={to}>See Product</Link>
      </div>
      <div className="cardd-left2">
        <img src={url} alt="" />
      </div>
    </div>
  );
}

export default Card2;

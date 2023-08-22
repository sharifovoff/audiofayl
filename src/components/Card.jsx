import './card.css'
import { Link } from 'react-router-dom';
function Card({url, span, h1, p, to}) {
  return (
    <div className="cardd">
      <div className="cardd-left">
        <img src={url} alt="" />
      </div>
      <div className="cardd-right">
              <span>{span}</span>
              <h1>{h1}</h1>
        <p>
         {p}
        </p>
        <Link to={to}>See Product</Link>
      </div>
    </div>
  );
}

export default Card
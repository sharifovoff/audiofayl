import Card from "../../components/Card";
import Cardd from "../../components/card/Card";
import Card2 from "../../components/Card2";
import "../headphones/Headphones.css";

function Earphones() {
  return (
    <div className="container">
      <Card
        h1="YX1 WIRELESS
EARPHONES"
        span="NEW PRODUCT"
        p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        to="/yx1"
        url="https://s3-alpha-sig.figma.com/img/d47b/304d/532a222f08c1500c16aa3ed52c16aa20?Expires=1693785600&Signature=Jbb483sv0qYVN848tGc49py81Is0Z1fWUKCeCGUdeIeTHI-zOY-3zWVKgIVREBjgzsjjPBeuAJsMMfJ81b3LJsfnar92zdn5GEo4E1yhyUyhqp8FDTyi5rQ0c0Gy8Tcbu1PyBtpFrEtFma~xN-GAq215Da-bL5NbcK85PnC1sNqc6D7-PZS3BIROeJNRtQq77qrvZfUp0WzW5w63huxE81JyWDQCtPPG61ZiDYrg230WU7HiGqb~n3Vz9iIUImIzEaXRGiryY~dVFgJLsVMxzLmQti61DyW5FZVz~Dfu1TWJ3bi-NGqFA6vZSset9eecAiyaFYeuiOwUV-aklRlouQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />

      <Cardd />
    </div>
  );
}

export default Earphones;

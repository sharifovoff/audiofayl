import Card from "../../components/Card";
import Cardd from "../../components/card/Card";
import Card2 from "../../components/Card2";
import "../headphones/Headphones.css";
import AudioGear from "../../components/audioGear/AudioGear";

function Speakers() {
  return (
    <div className="container">
      <Card
        h1="ZX9
SPEAKER"
        span="NEW PRODUCT"
        p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        to="/zx99"
        url="https://s3-alpha-sig.figma.com/img/e0c8/6dd2/a7f4c7505f96ce15449ca178ce6b7ad1?Expires=1693785600&Signature=D5tlkw8ZnDMa4pg3f5AJDBk0yPaV0L4uexXdUtoNbLusurkn~zFVe0cPdbq8zhMRXOyQlAN1C~wxHoyp99unOhGkMzy-abNZK3PNQkw7YvgX3hv3iS0xLqmRipp0mSAdnVQNp98AurpuH~cXwioSKhcdnDjKAQTsN7IpKn2ontmRWlEreXmmdwclKi3JQlMgSzkEZ0DhgmMAHduz0MK5iemVyeJd7OG8T0tah4MoQ8InK9CfPFOdLP3fjwxIgkOIGFhjvK74ckJNDsLTIEel4qm-qxXn1-LBuvvO15jKru5BGxz~I4Fy0DgSPr8x95ekJD7nAhCVl5q0WRmfbqr4nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <Card2
        h1="ZX7
SPEAKER"
        span=""
        p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        to="/zx7"
        url="https://s3-alpha-sig.figma.com/img/75a3/f121/63551d66ad83e8eb32a264967cd95be4?Expires=1693785600&Signature=j1ZtBLQEiD4TaLp1TaiPq0MrPnugHe-uDYYGxjsY~R4GCKzMEDlOf5wFf2Bmo3KW2MeBJrmm~Pk2g-edyxPMnwoL513b5W2GN90ftchb~dHdjsE9sRFS9W0oJNda7-rcoVAY591JZdI-JO6XH9JvX-p0hPo5tIIz9mEOEKQ4JbvgZYbkqnQS0Fltj6KMS8url9J~QU68G9I-QDblgZyaUPJpSlFxUVwwWLFl8XZXV0BHgN4cFiMNk0M-3XNec2NLAd-jc5Pj1R2HpaN85NduOFe0t8QO-NukhKhGdaDSqOasNYKfxPxngpCV-7qLQeJhNbeyoyRSug~E5FYGeimnyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />

      <Cardd />
      <AudioGear />
    </div>
  );
}

export default Speakers;

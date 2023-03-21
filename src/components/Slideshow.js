import { Link } from "react-router-dom";

function SlidesBox() {
  return (
    <div className="slides_box">
      <div className="slide">
        <Link to="/kategori">
          <img src="bilder/black_friday_pic.jpg" alt="Black Friday kampanjbild" />
        </Link>
      </div>
      <a href="index.html" className="prev">&#10094;</a>
      <a href="index.html" className="next">&#10095;</a>
    </div>
  );
}

export default SlidesBox;

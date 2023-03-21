import { Link } from "react-router-dom";

function SlidesBox() {
  return (
    <div className="slides_box">
      <div className="slide">
        <Link to="/kategori">
          <img src="bilder/black_friday_pic.jpg" alt="Black Friday kampanjbild" />
        </Link>
      </div>
      <a href="https://witty-plant-001cc2d03.2.azurestaticapps.net/" className="prev" style={{textDecoration:"none"}} >&#10094;</a>
      <a href="https://witty-plant-001cc2d03.2.azurestaticapps.net/" className="next" style={{textDecoration:"none"}} >&#10095;</a>
    </div>
  );
}

export default SlidesBox;

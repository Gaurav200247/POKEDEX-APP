import React from "react";
import { Link } from "react-router-dom";

const LEFT = ({ sprites, name }) => {
  const [chnageImg, setchnageImg] = React.useState(false);

  return (
    <div className="left-container">
      {/* ---------------------------- */}
      <Link to="/">
        <button className="btn btn-dark back-btn">Go Back</button>
      </Link>
      {/* ---------------------------- */}
      {/* ---------------------------- */}
      <div className="image-container">
        <img
          onMouseOver={() => setchnageImg(true)}
          onMouseLeave={() => setchnageImg(false)}
          className="image"
          src={
            chnageImg
              ? sprites.other.home.front_shiny
              : sprites.other.dream_world.front_default
          }
          alt={name}
        />
        <span className="image-info">Tap or Hover on image to see in 3D.</span>
      </div>
      {/* ---------------------------- */}
    </div>
  );
};

export default LEFT;

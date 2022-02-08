import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../STYLES/CSS/Navbar.css";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { toggle, settoggle } = useGlobalContext();

  const ChangeToggle = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };

  return (
    <nav>
      <div className="untoggled-nav">
        <div className="logo-container">
          <Link className="logo-link" to="/">
            <h3 className="logo">PokeDEX APP</h3>
          </Link>
        </div>
        <div className="links-container">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
        </div>
        <div className="toggle-btn-container">
          <FaBars className="toggle-btn" onClick={ChangeToggle} />
        </div>
      </div>
      {/* toggled nav */}
      <div className={`toggled-links-container ${toggle && "show-toggle"}`}>
        <Link className="toggled-links" to="/">
          Home
        </Link>
        <Link className="toggled-links" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

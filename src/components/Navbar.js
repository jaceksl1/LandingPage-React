import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ navbarLinks }) => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">DogHotel</span>
      {menuClicked ? (
        <button className={"navbar__menu"} onClick={toggleMenuClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : (
        <button className={"navbar__menu"} onClick={toggleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }>
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

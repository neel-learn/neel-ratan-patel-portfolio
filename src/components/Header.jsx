import { useState } from "react";
import "./css/Header.css";
import { useSelector } from "react-redux"

const Header = () => {

  const navBarList = useSelector((state) => state.portfolio.navBarList);

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const portFolioTitle = "PortFolio";

  return (
    <header className="navbar">
      <nav>
        <div className="portfolio-heading left">
          {portFolioTitle.split("").map((letter, index) => (
            <span key={index} className="hover-grow">
              {letter}
            </span>
          ))}
        </div>



        <div className="right">
          <button
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          
          <ul className={`nav-links ${isActive ? "active" : ""}`}>
            {navBarList.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={closeMenu}>
                  <i className={item.className} id={item.id}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

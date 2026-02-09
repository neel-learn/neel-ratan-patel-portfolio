import { useState } from "react";
import "./css/Header.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

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
        <motion.div
          className="portfolio-heading left"
          layoutId="main-logo"
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.2,
          }}
        >
          {portFolioTitle.split("").map((letter, index) => (
            <span key={index} className="hover-grow">
              {letter}
            </span>
          ))}
        </motion.div>

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
              <motion.li
                key={index}
                initial={
                  window.innerWidth <= 768
                    ? { opacity: 0, x: 20 }
                    : { opacity: 1, x: 0 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} onClick={closeMenu}>
                  <i className={item.className} id={item.id}></i>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useRef, useEffect } from "react";
import './../css/Contact.css';
import { toggleLike } from "../../store/portfolioSlice";
import myresume from "../objects/pdf/NEEL_RATAN_PATEL_JAVA_FULL_STACK_DEVELOPER_RESUME.pdf"
import { useDispatch, useSelector } from "react-redux";
import Massage from "./contact/massage";

const Contacts = () => {
  const portfolio = useSelector((state) => state.portfolio);
  const currentUserLiked = useSelector(
    (state) => state.portfolio.currentUserLiked,
  );

  const socialLinks = useSelector((state) => state.portfolio.socialLinks);

  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.portfolio.likeCount);

  const [showPdf, setShowPdf] = useState(false);

  const pdfRef = useRef(null);

  useEffect(() => {
    if (showPdf && pdfRef.current) {
      setTimeout(() => {
        pdfRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showPdf]);

const handleLikeClick = () => {
  dispatch(toggleLike());
};

  return (
    <section id="contact" className="sixthSection">
      <div className="contact-heading qualifications-heading">
        <h3>
          {"Get In Touch".split("").map((char, i) => (
            <span key={i} className="hover-grow">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
      </div>

      <div className="contact-container">
        <Massage></Massage>
        <div className="contact-local-container">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="contact-local-elements"
              id={link.id}
              target="_blank"
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}

          <section
            id="likeButton"
            className="contact-local-elements"
            onClick={handleLikeClick}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span id="likeBtn" aria-pressed={currentUserLiked}>
              {currentUserLiked ? (
                <i
                  className="fa-solid fa-heart"
                  style={{  fontSize: "1.4rem" }}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-heart"
                  style={{  fontSize: "1.4rem" }}
                ></i>
              )}
            </span>
            <span id="likeText" style={{ fontSize: "10px" }}>
              {likeCount} {currentUserLiked ? "liked" : "likes"}
            </span>
          </section>
        </div>

        <div className="last-container">
          <button
            className="full-width-btn"
            onClick={() => setShowPdf(!showPdf)}
          >
            {showPdf ? "Hide Resume" : "View Resume"}
          </button>

          <div
            id="pdf-container"
            ref={pdfRef}
            className={showPdf ? "show" : ""}
          >
            <iframe id="pdf-iframe" src={myresume} title="Resume"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

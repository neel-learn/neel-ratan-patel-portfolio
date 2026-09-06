const Massage = () => {
  return (
    <div className="contact-main-container">
      {/* EMAIL */}
      <a
        className="gmail contact-main-elements"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=ratanneel14@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope contact-main-image"></i>

        <h4 className="contact-name">Email</h4>

        <h6 className="contact-link">Drop Message Here</h6>
      </a>

      {/* LOCATION */}
      <a
        className="location contact-main-elements"
        href="https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3207396,82.9085362,29746m/data=!3m2!1e3!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-location-dot contact-main-image"></i>

        <h4 className="contact-name">Location</h4>
        <h4 className="contact-link">Varanasi, India</h4>
      </a>
    </div>
  );
};

export default Massage;

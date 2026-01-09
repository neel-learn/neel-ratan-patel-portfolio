import { useState, useRef } from "react";

const Massage = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://portfolio-nrcb.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // THIS IS THE IMPORTANT LINE
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          "Message Sent!"
        );
        setShowForm(false);
      } else {
        alert("Failed to send message to the server.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-main-container">
      {!showForm ? (
        <a
          className="gmail contact-main-elements"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
        >
          <span className="material-symbols-outlined contact-main-image">
            mail
          </span>
          <h4 className="contact-name">Email</h4>
          <h6 className="contact-link">Drop Massage Here</h6>
        </a>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-main-elements"
        >
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder=" "
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form-group">
            <textarea name="message" id="message" placeholder=" " required />
            <label htmlFor="message">Your Message</label>
          </div>
          <div className="message-button">
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <a
        className="location contact-main-elements"
        href="https://maps.google.com"
      >
        <span className="material-symbols-outlined contact-main-image">
          location_on
        </span>
        <h4 className="contact-name">Location</h4>
        <h4 className="contact-link">Varanasi, India</h4>
      </a>
    </div>
  );
};

export default Massage;

import React from "react";
import "./Footer.css"; // Import CSS for styling
import Section from "./Section";

const Footer = () => {
  return (
    <Section>
      <footer className="footer rounded-xl bg-black">
        <div className="footer-content rounded-xl bg-black">
        <div className="footer-info">
            <div className="contact-info ">
              <h3 className="text-n-3">Contact Us</h3>
              <p className="text-indigo-400">Email: info@springdale.edu</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            </div>
          <div className="map-container ">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6426764173493!2d-122.08424998469132!3d37.421999979824554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c4a2fffd5%3A0x106f9c62f0d60e26!2sGoogleplex!5e0!3m2!1sen!2sus!4v1597368338353!5m2!1sen!2sus"
              width="300"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          </div>
            <div className="footer-text">
              <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
            </div>
          </div>
        
      </footer>
    </Section>
  );
};

export default Footer;

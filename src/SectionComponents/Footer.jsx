import React from "react";
import brandLogo from "../assets/images/brand-logo.png";
import instaLogo from "../assets/images/instagram-logo.png";
import faceBookLogo from "../assets/images/facebook-logo.png";
import xLogo from "../assets/images/x-logo.png";
import discardLogo from "../assets/images/discord-logo.png";

const Footer = () => {
  return (
    <div className="footer-sec container">
      <div>
        <img src={brandLogo} className="footer-logo" />
        <p className="footer-para">
          Join us on a journey towards a healthier, balanced life – where each
          inhale and exhale contributes to your overall sense of wellness.
        </p>
      </div>
      <div>
        <div className="footer-contact-sec">
          <span className="head-txt">Contact us</span>
          <span className="txt">Phone: 9889785550</span>
          <span className="txt">Email: breathe@gmail.in</span>
          <span className="txt">Location: India</span>
        </div>
      </div>
      <div>
        <span className="stay-txt">Stay on touch</span>

        <div className="social-icon-sec">
          <img src={instaLogo} />
          <img src={faceBookLogo} />
          <img src={xLogo} />
          <img src={discardLogo} />
        </div>
      </div>
      <div className="footer-txt-sec">
        @2024 BreatheMatters all rights reserved
      </div>
    </div>
  );
};

export default Footer;

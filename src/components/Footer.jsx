import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/footer.scss"; // Make sure to import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <a 
          href="https://www.linkedin.com/in/trishita-yadav-2172b425a/" // Replace with your LinkedIn profile URL
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="footer-content">
        <p>&copy; 2024 Provital-Lifestyle. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

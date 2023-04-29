
import "./Landing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF , faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';


import { NavLink } from "react-router-dom";



import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="left-container">
        <h1 className="title">City Sherpa</h1>
        <p className="description">Your ultimate travel guide</p>
        <NavLink to="/map"><button className="cta-button">Get Started</button></NavLink>
        <div className="button-container">
        <NavLink to="/recommend"><button className="recommendation-button">Recommendation</button></NavLink>
        <NavLink to="/budget"><button className="budget-calculator-button">Budget Calculator</button></NavLink>
        </div>
      </div>
      <div className="right-container">
        <div className="background-image">
          <div className="lnavbar">
            <a href="#" className="social-media-icon">
              <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} className="icon"/></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} className="icon"/></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} className="icon"/></i>
            </a>
          </div>
        </div>
        
      </div>
      <div className="footer">
          <p className="copy-right">© 2023 City Sherpa. All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default LandingPage;

import React from "react";

import arrowLeft from "../../images/Footer/Icon-Left.svg";
import arrowRight from "../../images/Footer/Icon-Right.svg";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="leftside-footer">
        <img src={arrowLeft} alt="menu" className="arrow-left" />
      </div>
      <div className="number-of-pages">
        <p className="page-number page-selected">1</p>
        <p className="page-number">2</p>
        <p className="page-number">3</p>
        <p className="page-number">4</p>
        <p className="page-number">5</p>
      </div>
      <div className="rightside-footer">
        <img src={arrowRight} alt="menu" className="arrow-right" />
      </div>
    </div>
  );
}

export default Footer;

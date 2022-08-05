import React from "react";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="w-56 mt-24">
        <div className="grid grid-cols-3">
          <a href="https://www.facebook.com/">
            <img src="../../images/icon-facebook.svg" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src="../../images/icon-pinterest.svg" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="../../images/icon-instagram.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

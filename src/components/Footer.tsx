// @ts-nocheck
import React from "react";
import "../App.css";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="w-56 mt-24">
        <div className="grid grid-cols-3">
          <a href="https://www.facebook.com/">
            <img src={facebook} />
          </a>
          <a href="https://www.pinterest.com/">
            <img src={pinterest} />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc =
  "Take shop on your any device our app & learn all time what you want. Just download & install & start to learn";
export const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="conttainer">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="/">
                <img src="/src/assets/images/app/01.jpg"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/src/assets/images/app/02.jpg"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

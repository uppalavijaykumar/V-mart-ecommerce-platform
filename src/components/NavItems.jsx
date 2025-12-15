import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [Menutoggle, Setmenutoggle] = useState(false);
  const [Socialtoggle, Setsocialtoggle] = useState(false);
  const [Headerfixed, SetHeaderfixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      SetHeaderfixed(true);
    } else {
      SetHeaderfixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        Headerfixed ? "header-fixed fadeInup" : ""
      }`}
    >
      <div className={`header-top d-md-none ${Socialtoggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <a href="/signup" className="lab-btn me-3"><span>Create Account</span></a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>

      {/*header bottom*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo*/}
            <div className="logo-search-acte">
              <div className="logo">
                <a href="/"><img src={Logo} alt="logo" /></a>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${Menutoggle ? "active" : ""}`}>
                  <li><a href="">Home</a></li>
                  <li><a href="">Shop</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
                {/* sign in and login  */}
              </div>
               <a href="signup" className="lab-btn me-3 d-none d-md-block">Create Account</a>
                <a href="/login" className="">Log In</a>
                {/* menu toggler */}
                <div onClick={()=> Setmenutoggle(!Menutoggle)} className={`header-bar d-lg-none ${Menutoggle ? "active": ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {/* social toggle */}
                <div className="ellepsis-bar d-md-none" onClick={()=> Setsocialtoggle(!Socialtoggle)}>
                  <i className="icofont-info-square"></i>
                </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default NavItems;

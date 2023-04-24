import React from "react";
import "./header.css";

const Header = () => {

  

  return (
    <>
      <main className="wrapper">
        <header classname="header">
          <div className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <section className="imgLogo">
                <img
                  src="https://woxro.com/public/assets/png/woxrologo.png"
                  height="56"
                  width="205.875"
                />
              </section>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>

          <nav className="header-nav" id="navbar">
            <section className="header-nav-ul">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Technology</a>
              <a href="#">Careers</a>
              <a href="#">Blogs</a>
              <a href="#">Our Works</a>
              <a href="#">Contact Us</a>
            </section>
          </nav>
          <section className="header-banner" id="header-banner">
            <video className="banner-img" autoPlay="true" muted="true">
              <source
                src="https://woxro.com/public/assets/video/banner.mp4"
                type="video/mp4"
              />
              <source
                src="https://woxro.com/public/assets/video/banner.mp4"
                type="video/ogg"
              />
            </video>
            <div className="header-banner-cont">
              <h1 className="header-banner-head">
                Kerala's Leading Web <br /> Design Company
              </h1>
              <p className="header-banner-para">
                Global Web Designing Company That Provides Full-cycle Software
                Development Services, E-commerce & Mobile App Development
                Services.
              </p>
            </div>
          </section>
        </header>
      </main>
    </>
  );
};

export default Header;

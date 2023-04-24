import React from "react";
import "./contect.css";
import Contect from "../contact/Contect";

const Service = () => {
  return (
    <>
      <div className="main-container">
        <div className="subhead">
          <center>
            <strong>services we deliver</strong>
          </center>
        </div>
        <div className="head">
          <center>
            <h2>
              Preparing for your success, we provide truly prominent IT
              solutions.
            </h2>
          </center>
        </div>
      </div>
      <div className="service-cont">
        <a
          href="https://woxro.com/Web-Designing"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#e7f0f7" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/webdesigning.png"
                alt="Web Designing"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Web Designing</p>
            </div>
            <div className="cut-text">
              <p>
                We create impressive interfaces. Usability + user experience are
                created based on a study of preferences and user behavior, using
                the latest web design trends, our experience, and achievements.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://woxro.com/Web-Application"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#f6f5f3" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/webapplication.png"
                alt="Web Application"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Web Application</p>
            </div>
            <div className="cut-text">
              <p>
                We have completed projects in full-cycle web applications
                including CRM, HRM, and project management solutions. Look no
                further if you are in search of a professional partner who can
                develop stunning web applications.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://woxro.com/Mobile-App-Development"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#f6f5f3" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
                alt="Mobile App Development"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Mobile App Development</p>
            </div>
            <div className="cut-text">
              <p>
                We develop high-quality and effective applications for your
                business. Our expertise and knowledge help us create reliable
                mobile applications for iOS and Android and cross-platform
                solutions.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://woxro.com/Ecommerce-Development"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#fcf0e4" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
                alt="Ecommerce Development"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Ecommerce Development</p>
            </div>
            <div className="cut-text">
              <p>
                For some of you, our involvement as an eCommerce development and
                consulting partner will mean a powerful business launch with the
                right technology stack. For others – a possibility to give their
                business a fresh start.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://woxro.com/Digital-Marketing"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#f5f6f8" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
                alt="Digital Marketing"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Digital Marketing</p>
            </div>
            <div className="cut-text">
              <p>
                We bring together expertise in brand marketing and
                sustainability to design and implement ideas in branding. We
                also bring brand purpose to life by communicating great stories.
                Now Maximize your online visibility.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://woxro.com/Graphic-Designing"
          className="link-secret"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card-cont" style={{ backgroundColor: "#effbfb" }}>
            <div>
              <img
                src="https://woxro.com/public/assets/png/services/graphic.png"
                alt="Graphic Designing"
                className="imgStyle"
              />
            </div>
            <div className="services-head">
              <p>Graphic Designing</p>
            </div>
            <div className="cut-text">
              <p>
                We build sustainable, brands by connecting your product and
                message with audiences that would want to get your and or
                services. We nurture ideas to transform ands through creativity
                focussed on growth.
              </p>
            </div>
          </div>
        </a>
      </div>

      <Contect />
    </>
  );
};

export default Service;

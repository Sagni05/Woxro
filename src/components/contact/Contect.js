import React from "react";
import { FiMessageCircle, FiPhone } from "react-icons/fi";


const Contect = () => {
  return (
    <div className="inline-main-cont">
      <div className="inline-cont">
        <div className="inline-text-cont">
          <p>We offer all kinds of IT services that ensure your success</p>
        </div>
        <div className="inline-btn-cont">
          <a
            href="https://www.tidio.com/talk/awy0oqhfhhgorwbfeet8ywkbg4off9sl"
            target="blank"
            className="inline-btn"
          >
            <li className="contact"></li>
            <FiMessageCircle /> &nbsp; Let's Talk
          </a>

          <a
            href="https://woxro.com/contactus"
            target="blank"
            className="inline-btn"
          >
            <li className="contact"></li>
            <FiPhone /> &nbsp; Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contect;

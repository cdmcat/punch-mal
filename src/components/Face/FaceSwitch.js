import React from "react";
import PropTypes from "prop-types";

import default0 from "../../images/mah-default-punched.png";
import punch0 from "../../images/mah-default.png";

import default1 from "../../images/mah-level-1.png";
import punch1 from "../../images/mah-punched-level-1.png";

import default2 from "../../images/mah-level-2.png";
import punch2 from "../../images/mah-punched-level-2.png";

import default3 from "../../images/mah-level-3.png";
import punch3 from "../../images/mah-punched-level-3.png";

import default4 from "../../images/mah-level-4.png";
import punch4 from "../../images/mah-punched-level-4.png";

import default5 from "../../images/mah-level-5.png";
import punch5 from "../../images/mah-punched-level-5.png";

import default6 from "../../images/mah-level-6.png";
import punch6 from "../../images/mah-punched-level-6.png";

import default7 from "../../images/mah-level-7.png";
import punch7 from "../../images/mah-punched-level-7.png";

import default8 from "../../images/mah-level-8.png";
import punch8 from "../../images/mah-punched-level-8.png";

import default9 from "../../images/mah-level-9.png";
import punch9 from "../../images/mah-punched-level-9.png";

import default10 from "../../images/mah-level-99.png";
import punch10 from "../../images/mah-punched-level-99.png";

import "./face-switch.css";

const FaceSwitch = ({ level, isPunched }) => {
  return (
    <div className="FaceSwitch">
      <div className="face-group" style={{ opacity: level === 0 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default0}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch0}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 1 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default1}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch1}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 2 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default2}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch2}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 3 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default3}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch3}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 4 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default4}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch4}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 5 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default5}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch5}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 6 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default6}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch6}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 7 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={punch7}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={default7}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 8 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default8}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch8}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 9 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default9}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch9}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
      <div className="face-group" style={{ opacity: level === 10 ? 1 : 0 }}>
        <img
          alt="Ugly Ass Face"
          src={default10}
          className={!isPunched ? "is-hidden" : ""}
        />
        <img
          alt="Ugly Ass Face Punched"
          src={punch10}
          className={isPunched ? "is-hidden" : ""}
        />
      </div>
    </div>
  );
};

FaceSwitch.propTypes = {
  level: PropTypes.number.isRequired,
  isPunched: PropTypes.bool.isRequired,
};

export default FaceSwitch;

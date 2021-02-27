import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import glove from "../../images/boxingGloveCursor.png";
import "./gloves.css";

const Gloves = ({ count }) => {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  useEffect(() => {
    if (count % 2 === 0) {
      setRightActive(true);
      setTimeout(setRightActive.bind(false), 200);
    } else {
      setLeftActive(true);
      setTimeout(setLeftActive.bind(false), 200);
    }
  }, [count]);
  return (
    <div className="Gloves">
      <div className="container-left">
        <div className={`glove-container${leftActive ? " active" : ""}`}>
          <img className="glove-left" alt="glove left" src={glove} />
        </div>
      </div>
      <div className="container-right">
        <div className={`glove-container${rightActive ? " active" : ""}`}>
          <img className="glove-right" alt="glove right" src={glove} />
        </div>
      </div>
    </div>
  );
};

Gloves.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Gloves;

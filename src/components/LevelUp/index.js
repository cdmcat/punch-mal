import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./level-up.css";

const LevelUp = ({ level }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(setShow.bind(false), 300);
  }, [level]);
  return (
    <div className={`LevelUp${show ? " active" : ""}`}>
      <h1>Level {level >= 10 ? 99 : level + 1}</h1>
    </div>
  );
};
LevelUp.defaultProps = {
  level: 0,
};

LevelUp.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelUp;

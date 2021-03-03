import React from "react";
import PropTypes from "prop-types";
import "./punch-counter.css";

const PunchCounter = ({ count }) => {
  return (
    <div className="PunchCounter">
      <h2 className="punches">Punches: {count >= 99 ? 99 : count}</h2>
    </div>
  );
};

PunchCounter.propTypes = {
  count: PropTypes.number.isRequired,
  
};
export default PunchCounter;

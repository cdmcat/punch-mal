import React from "react";
import PropTypes from "prop-types";
import "./counter.css";

const Counter = ({ count, level }) => {
  const displayLevel = level >= 10 ? 99 : level + 1;
  return (
    <div className="Counter">
      <h2 className="punches">Punches: {count >= 99 ? 99 : count}</h2>
      {displayLevel === 99 ? (
        <h1 className="level">Level: {displayLevel}</h1>
      ) : (
        <h3 className="level">Level: {displayLevel}</h3>
      )}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};
export default Counter;

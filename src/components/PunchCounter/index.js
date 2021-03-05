import React from "react"
import PropTypes from "prop-types"
import "./punch-counter.css"

const PunchCounter = ({ count, level }) => {
  const displayLevel = level >= 10 ? 99 : level + 1
  return (
    <div className={`PunchCounter ${count >= 99 ? "red" : ""}`}>
      <h2 className="punches">Punches: {count >= 99 ? 99 : count}</h2>
      <div className="display-level">
        <h2 className="level">Level: {displayLevel}</h2>
      </div>
    </div>
  )
}

PunchCounter.propTypes = {
  count: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
}

export default PunchCounter

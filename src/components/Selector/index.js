import React from "react"
import PropTypes from "prop-types"
import weapons from "../../utils/weaponArray"
import "./selector.css"

const Selector = ({ currentWeapon, selectWeapon, level }) => {
  return (
    <div className="Selector">
      <div className="weapons-array">
        {weapons.map((weapon, index) => (
          <img
            key={index}
            src={weapon}
            className={`weapon ${currentWeapon === index ? "active" : ""}`}
            onClick={() => selectWeapon(index)}
          />
        ))}
      </div>
    </div>
  )
}

Selector.propTypes = {
  currentWeapon: PropTypes.number.isRequired,
  selectWeapon: PropTypes.func.isRequired,
}
export default Selector

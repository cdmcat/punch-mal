import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import weapons from "../../utils/weaponArray"
import "./weapons.css"

const Weapons = ({ count, currentWeapon }) => {
  const [leftActive, setLeftActive] = useState(false)
  const [rightActive, setRightActive] = useState(false)

  useEffect(() => {
    if (count % 2 === 0) {
      setRightActive(true)
      setTimeout(setRightActive.bind(false), 200)
    } else {
      setLeftActive(true)
      setTimeout(setLeftActive.bind(false), 200)
    }
  }, [count])

  return (
    <div className="Weapons">
      <div className="container-left">
        <div className={`glove-container ${leftActive ? " active" : ""}`}>
          {weapons.map((weapon, index) => (
            <img
              key={index}
              className={`glove-left ${
                index === currentWeapon ? "active" : ""
              }`}
              alt="glove left"
              src={weapon}
            />
          ))}
        </div>
      </div>
      <div className="container-right">
        <div className={`glove-container ${rightActive ? " active" : ""}`}>
          {weapons.map((weapon, index) => (
            <img
              key={index}
              className={`glove-right ${
                index === currentWeapon ? "active" : ""
              }`}
              alt="glove right"
              src={weapon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

Weapons.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Weapons

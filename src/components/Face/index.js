import React from "react"
import PropTypes from "prop-types"
import Weapons from "../Weapons"
import FaceSwitch from "./FaceSwitch"

const Face = ({ count, currentWeapon, handlePunch, level, isPunched }) => {
  return (
    <div className="mal" onClick={handlePunch}>
      <FaceSwitch {...{ level, isPunched }} />
      <Weapons {...{ count, currentWeapon }} />
    </div>
  )
}

Face.propTypes = {
  count: PropTypes.number.isRequired,
  currentWeapon: PropTypes.number.isRequired,
  handlePunch: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  isPunched: PropTypes.bool.isRequired,
}
export default Face

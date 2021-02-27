import React from "react"
import PropTypes from "prop-types"
import Gloves from "../../components/Gloves"
import FaceSwitch from "./FaceSwitch"

const Face = ({ count, handlePunch, level, isPunched }) => {
  return (
    <div className="mal" onClick={handlePunch}>
      <FaceSwitch {...{ level, isPunched }} />
      <Gloves count={count} />
    </div>
  )
}

Face.propTypes = {
  count: PropTypes.number.isRequired,
  handlePunch: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  isPunched: PropTypes.bool.isRequired,
}
export default Face

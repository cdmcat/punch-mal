import React, { useState, useEffect } from "react"
import { punch } from "../../utils/audio"
import PunchCounter from "../../components/PunchCounter"
import Face from "../../components/Face"
import LevelUp from "../../components/LevelUp"
import Loader from "../../components/Loader"
import Selector from "../../components/Selector"
import "./game.css"

const Game = () => {
  const [loading, setLoading] = useState(true)
  const [isPunched, setIsPunched] = useState(false)
  const [count, setCount] = useState(0)
  const [level, setLevel] = useState(0)
  const [currentWeapon, setCurrentWeapon] = useState(0)

  const selectWeapon = index => setCurrentWeapon(index)

  const handlePunch = () => {
    setIsPunched(false)
    setIsPunched(true)
    setCount(count + 1)
    punch()
    setTimeout(setIsPunched.bind(false), 300)
  }

  useEffect(() => {
    setTimeout(setLoading.bind(false), 5000)
  }, [])

  // sideeffect for handling level (level is floor of count/10);
  useEffect(() => {
    if (count >= 99) {
      setLevel(10)
    } else {
      const level = Math.floor(count / 10)
      setLevel(level)
    }
  }, [count, loading])

  return (
    <div className="Game">
      <Selector {...{ currentWeapon, selectWeapon, level }} />
      <div className="content">
        {!loading && <LevelUp level={level} />}
        <Face
          {...{
            count,
            handlePunch,
            level,
            isPunched,
            currentWeapon,
          }}
        />
        <PunchCounter count={count} />
      </div>
      {loading && <Loader />}
    </div>
  )
}

export default Game

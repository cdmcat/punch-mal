import React, { useState, useEffect } from "react"
import { punch } from "../../utils/audio"
import Counter from "../../components/Counter"
import Face from "../../components/Face"
import LevelUp from "../../components/LevelUp"
import Loader from "../../components/Loader"
import "./game.css"

const Game = () => {
  const [loading, setLoading] = useState(true)
  const [isPunched, setIsPunched] = useState(false)
  const [count, setCount] = useState(0)
  const [level, setLevel] = useState(0)

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
      <h1 className="title">
        <span>Punch</span> <strong>MAL</strong>
      </h1>
      <div className="content">
        {!loading && <LevelUp level={level} />}
        <Face
          {...{
            count,
            handlePunch,
            level,
            isPunched,
          }}
        />
        <Counter count={count} level={level} />
      </div>
      {loading && <Loader />}
    </div>
  )
}

export default Game

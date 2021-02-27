import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Game from "../components/Game"
import Disclaimer from "../components/Disclaimer"
import { useLoadAudio } from "../utils/audio"

import "./index.css"

const IndexPage = () => {
  const [isGame, setIsGame] = useState(false)
  const isLoaded = useLoadAudio(false)
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Ma Aye Loe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isGame ? (
        <Game />
      ) : (
        <Disclaimer setIsGame={setIsGame} isLoaded={isLoaded} />
      )}
    </div>
  )
}

export default IndexPage

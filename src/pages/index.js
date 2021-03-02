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
        <meta name="HandheldFriendly" content="true" />
        <title>Ma Aye Loe</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ma Aye Loe" />
        <meta property="og:title" content="Min Aung Hlaing | Ma Aye Loe" />
        <meta property="og:description" content="Fuck The Coup" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="http://www.ma-aye-loe.com" />
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

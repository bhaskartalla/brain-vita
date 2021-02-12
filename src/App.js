import React, { useState } from "react"
import { Wrapper, GameTitle } from "./style"
import Game from "./components/Game"

const App = () => {
  return (
    <Wrapper>
      <GameTitle>
        <p>Brain-Vita</p>
      </GameTitle>
      <Game />
    </Wrapper>
  )
}

export default App

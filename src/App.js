import React, { useState } from "react"
import { Wrapper, GameTitle } from "./style"
import Game from "./components/Game"

const App = () => {
  return (
    <Wrapper>
      <GameTitle>Brain-Vita</GameTitle>
      <Game />
    </Wrapper>
  )
}

export default App

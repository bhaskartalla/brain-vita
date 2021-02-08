import React, { useState, useEffect } from "react"
import {
  Board,
  Top,
  Middle,
  Bottom,
  InoDivrapper,
  Errorlabel,
  ScoreLabel,
} from "./style"
import Square from "./Square"
import { useGameState } from "../utils/GameState"
import FormDetails from "./FormDetails"

const Game = () => {
  const [slots, gameState, setGameState] = useGameState()
  const [isSourceSelected, setIsSourceSelected] = useState(false)
  const [sourcePos, setSourcePos] = useState([])
  const [invalidMove, setInvalidMove] = useState(false)
  const [score, setScore] = useState(32)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInvalidMove(false)
    }, 3000)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [invalidMove])

  const handleClick = (i, j) => {
    // console.log(i, j)
    if (gameState[i][j].value === "") {
      if (isSourceSelected) {
        // console.log("SourceSelected EMPTY")
        performMarbleMovement(sourcePos[0], sourcePos[1], i, j)
      } else {
        // console.log("No SourceSelected EMPTY") // Do nothing
      }
    } else {
      if (isSourceSelected) {
        // Show error msg
        // console.log("SourceSelected NON EMPTY =>  Error....!!!!")
        hideAvailableSlots(sourcePos[0], sourcePos[1])
      } else {
        // console.log("No SourceSelected NON EMPTY")
        const slots = showAvailableSlots(i, j)
      }
    }
  }

  const performMarbleMovement = (si, sj, di, dj) => {
    if (gameState[di][dj].isValid) {
      setGameState(di, dj, "O", false)
      setGameState((si + di) / 2, (sj + dj) / 2, "", false)
      setGameState(si, sj, "", false)
      setIsSourceSelected(false)
      setSourcePos([])
      setScore((score) => score - 1)
    } else {
      hideAvailableSlots(sourcePos[0], sourcePos[1])
      setInvalidMove(true)
    }
  }

  const showAvailableSlots = (i, j) => {
    const avlSlots = Object.entries(slots).filter(
      (obj) => obj[0] === `${i}:${j}`
    )[0][1]

    avlSlots.map((slot) => {
      if (
        gameState[slot.nr][slot.nc].value === "O" &&
        gameState[slot.er][slot.ec].value === ""
      ) {
        setGameState(slot.er, slot.ec, "", true)
        setIsSourceSelected(true)
        setSourcePos([i, j])
      }
      // console.log("showAvailableSlots : ", slot)
    })
  }

  const hideAvailableSlots = (i, j) => {
    gameState.forEach((x, i) => {
      x.forEach((y, j) => {
        setGameState(i, j, gameState[i][j].value, false)
      })
    })
    setIsSourceSelected(false)
    setSourcePos([])
  }

  const resetGame = () => {
    gameState.forEach((x, i) => {
      x.forEach((y, j) => {
        setGameState(i, j, "O", false)
      })
    })
    setGameState(3, 3, "", false)
    setIsSourceSelected(false)
    setSourcePos([])
    setInvalidMove(false)
    setScore(32)
  }

  const handleSubmit = (username) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: username,
        marbles: score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {})

    resetGame()
  }

  const renderSquare = (i, j) => (
    <Square
      isValidPos={gameState[i][j].isValid}
      onClick={() => handleClick(i, j)}
      isEmpty={gameState[i][j].value}
    />
  )

  return (
    <>
      <InoDivrapper>
        <Errorlabel isError={invalidMove}>Error..!! Invalid move</Errorlabel>
        <ScoreLabel>Marbles left : {score}</ScoreLabel>
      </InoDivrapper>
      <Board>
        <Top>
          {renderSquare(0, 2)}
          {renderSquare(0, 3)}
          {renderSquare(0, 4)}
          {renderSquare(1, 2)}
          {renderSquare(1, 3)}
          {renderSquare(1, 4)}
        </Top>
        <Middle>
          {renderSquare(2, 0)}
          {renderSquare(2, 1)}
          {renderSquare(2, 2)}
          {renderSquare(2, 3)}
          {renderSquare(2, 4)}
          {renderSquare(2, 5)}
          {renderSquare(2, 6)}
          {renderSquare(3, 0)}
          {renderSquare(3, 1)}
          {renderSquare(3, 2)}
          {renderSquare(3, 3)}
          {renderSquare(3, 4)}
          {renderSquare(3, 5)}
          {renderSquare(3, 6)}
          {renderSquare(4, 0)}
          {renderSquare(4, 1)}
          {renderSquare(4, 2)}
          {renderSquare(4, 3)}
          {renderSquare(4, 4)}
          {renderSquare(4, 5)}
          {renderSquare(4, 6)}
        </Middle>
        <Bottom>
          {renderSquare(5, 2)}
          {renderSquare(5, 3)}
          {renderSquare(5, 4)}
          {renderSquare(6, 2)}
          {renderSquare(6, 3)}
          {renderSquare(6, 4)}
        </Bottom>
      </Board>
      <FormDetails handleSubmit={handleSubmit} score={score} />
    </>
  )
}

export default Game

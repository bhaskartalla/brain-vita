import { useState } from "react"

export const useGameState = () => {
  const slots = {
    "0:2": [
      { nr: 1, nc: 2, er: 2, ec: 2 },
      { nr: 0, nc: 3, er: 0, ec: 4 },
    ],
    "0:3": [{ nr: 1, nc: 3, er: 2, ec: 3 }],
    "0:4": [
      { nr: 0, nc: 3, er: 0, ec: 2 },
      { nr: 1, nc: 4, er: 2, ec: 4 },
    ],
    "1:2": [
      { nr: 1, nc: 3, er: 1, ec: 4 },
      { nr: 2, nc: 2, er: 3, ec: 2 },
    ],
    "1:3": [{ nr: 2, nc: 3, er: 3, ec: 3 }],
    "1:4": [
      { nr: 1, nc: 3, er: 1, ec: 2 },
      { nr: 2, nc: 4, er: 3, ec: 4 },
    ],
    "2:0": [
      { nr: 2, nc: 1, er: 2, ec: 2 },
      { nr: 3, nc: 0, er: 4, ec: 0 },
    ],
    "2:1": [
      { nr: 3, nc: 1, er: 4, ec: 1 },
      { nr: 2, nc: 2, er: 2, ec: 3 },
    ],
    "2:2": [
      { nr: 1, nc: 2, er: 0, ec: 2 },
      { nr: 2, nc: 3, er: 2, ec: 4 },
      { nr: 3, nc: 2, er: 4, ec: 2 },
      { nr: 2, nc: 1, er: 2, ec: 0 },
    ],
    "2:3": [
      { nr: 1, nc: 3, er: 0, ec: 3 },
      { nr: 2, nc: 4, er: 2, ec: 5 },
      { nr: 3, nc: 3, er: 4, ec: 3 },
      { nr: 2, nc: 2, er: 2, ec: 1 },
    ],
    "2:4": [
      { nr: 1, nc: 4, er: 0, ec: 4 },
      { nr: 2, nc: 5, er: 2, ec: 6 },
      { nr: 3, nc: 4, er: 4, ec: 4 },
      { nr: 2, nc: 3, er: 2, ec: 2 },
    ],
    "2:5": [
      { nr: 3, nc: 5, er: 4, ec: 5 },
      { nr: 2, nc: 4, er: 2, ec: 3 },
    ],
    "2:6": [
      { nr: 3, nc: 6, er: 4, ec: 6 },
      { nr: 2, nc: 5, er: 2, ec: 4 },
    ],
    "3:0": [{ nr: 3, nc: 1, er: 3, ec: 2 }],
    "3:1": [{ nr: 3, nc: 2, er: 3, ec: 3 }],
    "3:2": [
      { nr: 2, nc: 2, er: 2, ec: 1 },
      { nr: 3, nc: 3, er: 3, ec: 4 },
      { nr: 4, nc: 2, er: 5, ec: 2 },
      { nr: 3, nc: 1, er: 3, ec: 0 },
    ],
    "3:3": [
      { nr: 2, nc: 3, er: 1, ec: 3 },
      { nr: 3, nc: 4, er: 3, ec: 5 },
      { nr: 4, nc: 3, er: 5, ec: 3 },
      { nr: 3, nc: 2, er: 3, ec: 1 },
    ],
    "3:4": [
      { nr: 2, nc: 4, er: 1, ec: 4 },
      { nr: 3, nc: 5, er: 3, ec: 6 },
      { nr: 4, nc: 4, er: 5, ec: 4 },
      { nr: 3, nc: 3, er: 3, ec: 2 },
    ],
    "3:5": [{ nr: 3, nc: 4, er: 3, ec: 3 }],
    "3:6": [{ nr: 3, nc: 5, er: 3, ec: 4 }],
    "4:0": [
      { nr: 3, nc: 0, er: 2, ec: 0 },
      { nr: 4, nc: 1, er: 4, ec: 2 },
    ],
    "4:1": [
      { nr: 3, nc: 1, er: 2, ec: 1 },
      { nr: 4, nc: 2, er: 4, ec: 3 },
    ],
    "4:2": [
      { nr: 3, nc: 2, er: 2, ec: 2 },
      { nr: 4, nc: 3, er: 4, ec: 4 },
      { nr: 5, nc: 2, er: 6, ec: 2 },
      { nr: 4, nc: 1, er: 4, ec: 0 },
    ],
    "4:3": [
      { nr: 3, nc: 3, er: 2, ec: 3 },
      { nr: 4, nc: 4, er: 4, ec: 5 },
      { nr: 5, nc: 3, er: 6, ec: 3 },
      { nr: 4, nc: 2, er: 4, ec: 1 },
    ],
    "4:4": [
      { nr: 3, nc: 4, er: 2, ec: 4 },
      { nr: 4, nc: 5, er: 4, ec: 6 },
      { nr: 5, nc: 4, er: 6, ec: 4 },
      { nr: 4, nc: 3, er: 4, ec: 2 },
    ],
    "4:5": [
      { nr: 3, nc: 5, er: 2, ec: 5 },
      { nr: 4, nc: 4, er: 4, ec: 3 },
    ],
    "4:6": [
      { nr: 3, nc: 6, er: 2, ec: 6 },
      { nr: 4, nc: 5, er: 4, ec: 4 },
    ],
    "5:2": [
      { nr: 4, nc: 2, er: 3, ec: 2 },
      { nr: 5, nc: 3, er: 5, ec: 4 },
    ],
    "5:3": [{ nr: 4, nc: 3, er: 3, ec: 3 }],
    "5:4": [
      { nr: 4, nc: 4, er: 3, ec: 4 },
      { nr: 5, nc: 3, er: 5, ec: 2 },
    ],
    "6:2": [
      { nr: 5, nc: 2, er: 4, ec: 2 },
      { nr: 6, nc: 3, er: 6, ec: 4 },
    ],
    "6:3": [{ nr: 5, nc: 3, er: 4, ec: 3 }],
    "6:4": [
      { nr: 5, nc: 4, er: 4, ec: 4 },
      { nr: 6, nc: 3, er: 6, ec: 2 },
    ],
  }

  const [gameState, setState] = useState([
    [
      { value: "N", isValid: false },
      { value: "N", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "N", isValid: false },
      { value: "N", isValid: false },
    ],
    [
      { value: "N", isValid: false },
      { value: "N", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "N", isValid: false },
      { value: "N", isValid: false },
    ],
    [
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
    ],
    [
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
    ],
    [
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
    ],
    [
      { value: "N", isValid: false },
      { value: "N", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "N", isValid: false },
      { value: "N", isValid: false },
    ],
    [
      { value: "N", isValid: false },
      { value: "N", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "O", isValid: false },
      { value: "N", isValid: false },
      { value: "N", isValid: false },
    ],
  ])

  const setGameState = (i, j, value, isValid) => {
    setState((prevState) => {
      const grid = prevState.slice()
      grid[i][j].value = value
      grid[i][j].isValid = isValid
      return grid
    })
  }

  return [slots, gameState, setGameState]
}

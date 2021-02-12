import React from "react"
import styled from "styled-components"

const Box = styled.button`
  max-width: 80px;
  max-height: 80px;
  width: 100%;
  height: 100%;
  outline: none;
  font-family: fantasy;
  font-size: 32px;
  border: 1px solid aquamarine;
  background-color: ${({ isValid }) => (isValid ? "darkorange" : "beige")};
  &:active {
    font-size: 40px;
  }
`

const Square = (props) => {
  return (
    <Box
      isValid={props.isValidPos}
      id={props.id}
      onClick={() => props.onClick()}
    >
      {props.isEmpty}
    </Box>
  )
}

export default Square

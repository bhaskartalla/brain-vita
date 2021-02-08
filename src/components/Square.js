import React from "react"
import styled from "styled-components"

const Box = styled.button`
  width: 80px;
  height: 80px;
  outline: none;
  font-family: fantasy;
  font-size: 48px;
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

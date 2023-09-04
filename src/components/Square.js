import React from 'react'
import styled from 'styled-components'
import circle from './../assets/circle.png'

const Box = styled.button`
  ${'' /* max-width: 80px; */}
  ${'' /* max-height: 80px; */}
  width: 60px;
  height: 60px;
  outline: none;
  font-family: fantasy;
  ${'' /* font-size: 32px; */}
  border: 1px solid aquamarine;
  background-color: ${({ isValid }) => (isValid ? 'darkorange' : 'beige')};
  &:active {
    font-size: 40px;
  }
`

const Square = (props) => {
  console.log('Square props', props)
  return (
    <Box
      isValid={props.isValidPos}
      id={props.id}
      onClick={() => props.onClick()}
    >
      {props.isEmpty === 'O' ? (
        <img height='60' width='60' src={circle} alt='react logo' />
      ) : (
        ''
      )}
    </Box>
  )
}

export default Square

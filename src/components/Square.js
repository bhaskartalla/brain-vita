import React from 'react'
import styled from 'styled-components'
import circle from './../assets/circle.png'

const Box = styled.div`
  ${'' /* max-width: 80px; */}
  ${'' /* max-height: 80px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  outline: none;
  font-family: fantasy;
  ${'' /* font-size: 32px; */}
  border: 1px solid aquamarine;
  background-color: ${({ isValid }) => (isValid ? 'darkorange' : 'beige')};
  &:active {
    font-size: 40px;
  }

  @media (max-width: 568px) {
    width: 45px;
    height: 45px;
  }
`

const CircleImage = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 568px) {
    width: 30px;
    height: 30px;
  }
`

const Square = (props) => {
  return (
    <Box
      isValid={props.isValidPos}
      id={props.id}
      onClick={() => props.onClick()}
    >
      {/* {props.isEmpty} */}
      {props.isEmpty === 'O' ? (
        <CircleImage src={circle} alt='react logo' />
      ) : (
        ''
      )}
    </Box>
  )
}

export default Square

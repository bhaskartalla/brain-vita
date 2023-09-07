import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: aquamarine;
`

export const GameTitle = styled.div`
  align-items: center;
  font-family: monospace;
  font-size: 60px;
  text-align: center;
  height: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

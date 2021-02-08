import styled from "styled-components"

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 560px;
  margin: auto;
  align-items: center;
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 240px;
  height: 160px;
`

export const Middle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 240px;
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 240px;
  height: 160px;
`

export const InoDivrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`

export const Errorlabel = styled.label`
  font-size: 18px;
  font-family: fantasy;
  color: #f44336;
  visibility: ${({ isError }) => (isError ? "none" : "hidden")};
`

export const ScoreLabel = styled.label`
  font-size: 22px;
  font-family: monospace;
  position: absolute;
  right: 16px;
  margin-bottom: 6px;
`

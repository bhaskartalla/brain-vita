import styled from "styled-components"

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  max-height: 560px;
  width: 98%;
  margin: auto;
  min-height: 560px;
  align-items: center;
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 42%;
  height: 28%;
  min-height: 140px;
`

export const Middle = styled.div`
  display: grid;
  width: 100%;
  height: 42%;
  grid-template-columns: repeat(7, 1fr);
  min-height: 210px;
  grid-template-rows: repeat(3, 1fr);
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 42%;
  min-height: 140px;
  height: 28%;
`

export const InfoDivrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: unset;
  }
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

  @media (max-width: 768px) {
    position: unset;
    margin-bottom: 16px;
  }
`

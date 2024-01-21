import styled from 'styled-components'

export const ScoreViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  background-color: transparent;
`
export const ScoreNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreNamesHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: normal;
`

export const ScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 45px 15px 45px;
  border-radius: 10px;
`

export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 18px;
  color: #223a5f;
  padding: 0;
  margin: 0;
`

export const ScoreResultValue = styled.p`
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 500;
  color: #223a5f;
  padding: 0;
  margin: 0;
`

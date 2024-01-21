import {
  ScoreViewContainer,
  ScoreNamesContainer,
  ScoreNamesHeading,
  ScoreBoardContainer,
  ScoreHeading,
  ScoreResultValue,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreViewContainer>
      <ScoreNamesContainer>
        <ScoreNamesHeading>
          ROCK <br />
          PAPER <br /> SCISSORS
        </ScoreNamesHeading>
      </ScoreNamesContainer>
      <ScoreBoardContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResultValue>{score}</ScoreResultValue>
      </ScoreBoardContainer>
    </ScoreViewContainer>
  )
}

export default ScoreView

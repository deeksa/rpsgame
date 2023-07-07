import {
  HeaderContainer,
  HeaderSubContainer,
  HeaderPara,
  // eslint-disable-next-line import/named
  ScorePara,
  ScoreContainer,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <HeaderSubContainer>
        <div>
          <HeaderPara>ROCK</HeaderPara>
          <HeaderPara>PAPER</HeaderPara>
          <HeaderPara>SCISSORS</HeaderPara>
        </div>
        <ScoreContainer>
          <p>Score</p>
          <ScorePara>{score}</ScorePara>
        </ScoreContainer>
      </HeaderSubContainer>
    </HeaderContainer>
  )
}
export default Header

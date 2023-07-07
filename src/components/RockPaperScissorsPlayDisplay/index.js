import {Container2, PlayContainer, HeaderPara, Image1} from './styledComponents'

const RockPaperScissorsPlayDisplay = props => {
  const {selectedOption, playAgain, randomGenerator, result} = props
  //   const min = 1
  //   const max = 3
  //   const d = min + Math.random() * (max - min)
  //   const e = Math.floor(d)
  //   const randomGenerator = choicesList[e]

  //   const getResult = (rGenerator, sOption) => {
  //     const f = rGenerator.id
  //     const g = sOption.id
  //     if (f === g) {
  //       return 'IT IS DRAW'
  //     }
  //     if (f === 'PAPER' && g === 'ROCK') {
  //       return 'YOU WON'
  //     }
  //     if (f === 'SCISSORS' && g === 'ROCK') {
  //       return 'YOU LOSE'
  //     }
  //     if (f === 'ROCK' && g === 'PAPER') {
  //       return 'YOU LOSE'
  //     }
  //     if (f === 'SCISSORS' && g === 'PAPER') {
  //       return 'YOU WON'
  //     }
  //     if (f === 'ROCK' && g === 'SCISSORS') {
  //       return 'YOU WON'
  //     }
  //     if (f === 'PAPER' && g === 'SCISSORS') {
  //       return 'YOU LOSE'
  //     }

  //     return ''
  //   }
  //   const Result = getResult(randomGenerator, selectedOption)
  //   const onCalculateScore = () => {
  //     calculateResult(Result)
  //   }
  //   if (Result !== 'IT IS DRAW') {
  //     onCalculateScore()
  //   }
  const onTapPlayAgain = () => {
    playAgain()
  }
  return (
    <Container2>
      <PlayContainer>
        <div>
          <HeaderPara>You</HeaderPara>
          <Image1 src={selectedOption.imageUrl} alt="your choice" />
        </div>
        <div>
          <HeaderPara>Opponent</HeaderPara>
          <Image1 src={randomGenerator.imageUrl} alt="opponent choice" />
        </div>
      </PlayContainer>
      <HeaderPara>{result}</HeaderPara>
      <button type="button" onClick={onTapPlayAgain}>
        PLAY AGAIN
      </button>
    </Container2>
  )
}
export default RockPaperScissorsPlayDisplay

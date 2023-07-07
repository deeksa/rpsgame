import {Component} from 'react'

import Header from '../Header'
import RockPaperScissorsDisplay from '../RockPaperScissorsDisplay'
import RockPaperScissorsPlayDisplay from '../RockPaperScissorsPlayDisplay'
import RulesPopUp from '../RulesPopUp'
import {BackgroundContainer, Heading} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    selectedOption: '',
    random: '',
    result: '',
  }

  getResult = (sOption, rGenerator) => {
    const f = sOption.id
    const g = rGenerator.id
    if (f === g) {
      return 'IT IS DRAW'
    }
    if (f === 'PAPER' && g === 'ROCK') {
      return 'YOU WON'
    }
    if (f === 'SCISSORS' && g === 'ROCK') {
      return 'YOU LOSE'
    }
    if (f === 'ROCK' && g === 'PAPER') {
      return 'YOU LOSE'
    }
    if (f === 'SCISSORS' && g === 'PAPER') {
      return 'YOU WON'
    }
    if (f === 'ROCK' && g === 'SCISSORS') {
      return 'YOU WON'
    }
    if (f === 'PAPER' && g === 'SCISSORS') {
      return 'YOU LOSE'
    }

    return ''
  }

  onTapOption = option => {
    const min = 0
    const max = 3
    const d = min + Math.random() * (max - min)
    const e = Math.floor(d)
    const randomGenerator = choicesList[e]
    const res = this.getResult(option, randomGenerator)
    if (res === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (res === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
    this.setState({
      selectedOption: option,
      random: randomGenerator,
      result: res,
    })
  }

  //   calculateResult = result => {
  //     const {score} = this.state
  //     if (result === 'YOU WON') {
  //       console.log(score)
  //       this.setState(prevState => ({score: prevState.score + 1}))
  //     } else {
  //       this.setState(prevState => ({score: prevState.score - 1}))
  //     }
  //   }

  playAgain = () => {
    this.setState({selectedOption: ''})
  }

  render() {
    const {score, selectedOption, random, result} = this.state
    return (
      <BackgroundContainer>
        <Heading>Rock Paper Scissors</Heading>
        <div>
          <Header score={score} />
        </div>
        <div>
          {selectedOption === '' ? (
            <RockPaperScissorsDisplay
              choicesList={choicesList}
              onTapOption={this.onTapOption}
            />
          ) : (
            <RockPaperScissorsPlayDisplay
              selectedOption={selectedOption}
              choicesList={choicesList}
              playAgain={this.playAgain}
              calculateResult={this.calculateResult}
              randomGenerator={random}
              result={result}
            />
          )}
        </div>
        <div>
          <RulesPopUp />
        </div>
      </BackgroundContainer>
    )
  }
}
export default RockPaperScissors

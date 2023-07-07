import {
  RockPaperDisplayContainer,
  Image1,
  ButtonStyle,
  Container2,
} from './styledComponents'

const RockPaperScissorsDisplay = props => {
  const {choicesList, onTapOption} = props
  const a = choicesList[0]
  const b = choicesList[1]
  const c = choicesList[2]
  const onTapRockButton = () => {
    onTapOption(choicesList[0])
  }
  const onTapScissorButton = () => {
    onTapOption(choicesList[1])
  }
  const onTapPaperButton = () => {
    onTapOption(choicesList[2])
  }
  return (
    <Container2>
      <RockPaperDisplayContainer>
        <ButtonStyle
          type="button"
          onClick={onTapRockButton}
          data-testid="rockButton"
        >
          <Image1 src={a.imageUrl} alt={a.id} />
        </ButtonStyle>
        <ButtonStyle
          type="button"
          onClick={onTapScissorButton}
          data-testid="scissorsButton"
        >
          <Image1 src={b.imageUrl} alt={b.id} />
        </ButtonStyle>
      </RockPaperDisplayContainer>

      <ButtonStyle
        type="button"
        onClick={onTapPaperButton}
        data-testid="paperButton"
      >
        <Image1 src={c.imageUrl} alt={c.id} />
      </ButtonStyle>
    </Container2>
  )
}
export default RockPaperScissorsDisplay

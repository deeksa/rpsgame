import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'
import {
  ButtonAlignment,
  Pops,
  Image,
  Close,
  Container6,
} from './styledComponents'

const RulesPopUp = () => (
  <Popup
    modal
    trigger={
      <ButtonAlignment>
        <button type="button">RULES</button>
      </ButtonAlignment>
    }

    // <Popup></Popup>
  >
    {close => (
      <Container6>
        <Close type="button" data-testid="closeButton" onClick={() => close()}>
          <RiCloseLine size={20} color="#231f20" />
        </Close>
        <div>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </div>
      </Container6>
    )}
  </Popup>
)
export default RulesPopUp

import React from 'react';
import { 
  SemiCircle, 
  StartButton,
  ButtonContainer,
  TopLeftButton, 
  TopLeftInsert, 
  TopRightButton,
  TopRightInsert,
  BottomLeftButton, 
  BottomLeftInsert,
  BottomRightButton, 
  BottomRightInsert,
  AppHeader 
} from './AppStyles'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pattern: []
    }
    this.startGame = this.startGame.bind(this);
    this.generateNumber = this.generateNumber.bind(this);
  }

  componentDidMount() {
    this.startGame();
    console.log(this.state.pattern);
  }

  generateNumber() {
    return Math.floor((Math.random() * 4) + 1);
  }

  startGame() {
    this.state.pattern.push(this.generateNumber());
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        <SemiCircle>
          <TopLeftButton>
            <TopLeftInsert />
          </TopLeftButton>
          <TopRightButton>
            <TopRightInsert />
          </TopRightButton>
        </SemiCircle>
        <SemiCircle>
          <BottomLeftButton>
            <BottomLeftInsert />
          </BottomLeftButton>
          <BottomRightButton>
            <BottomRightInsert />
          </BottomRightButton>
        </SemiCircle>
        <ButtonContainer>
          <StartButton>Start</StartButton>
        </ButtonContainer>  
      </div>
    )
  } 

}
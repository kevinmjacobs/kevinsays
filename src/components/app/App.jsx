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
      pattern: [],
      selected: 0,
      guessIndex: 0,
      score: 0
    }
    this.startGame = this.startGame.bind(this);
    this.generateNumber = this.generateNumber.bind(this);
    this.highlightButtons = this.highlightButtons.bind(this);
    this.guessPattern = this.guessPattern.bind(this);
  }

  generateNumber() {
    return Math.floor((Math.random() * 4) + 1);
  }

  startGame() {
    this.state.pattern.push(this.generateNumber());
    this.highlightButtons();
  }

  highlightButtons() {
    this.state.pattern.forEach(selected => {
      console.log(selected)
      this.setState({ selected });
      setTimeout(() => { this.setState({ selected: 0 }); }, 1000)
    })
  }

  guessPattern(e) {
    console.log('clicked id', e.target.id, 'first pattern', ''+this.state.pattern[this.state.guessIndex]);
    if (e.target.id === ''+this.state.pattern[this.state.guessIndex]) {
      let newIndex = this.state.guessIndex + 1;
      console.log(newIndex)
      if (newIndex >= this.state.pattern.length) {
        this.setState({
          guessIndex: 0,
          score: this.state.score++
        }, () => {
          this.state.pattern.push(this.generateNumber());
          this.highlightButtons();
        })
      } else {
        this.setState({
          guessIndex: newIndex
        })
      }
    } else {
      console.log('Score',this.state.score);
      this.setState({
        pattern: [],
        selected: 0,
        guessIndex: 0,
        score: 0
      })
    }
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        <SemiCircle>
          <TopLeftButton id={1} selected={this.state.selected} onClick={(e) => this.guessPattern(e)}>
            <TopLeftInsert />
          </TopLeftButton>
          <TopRightButton id={2} selected={this.state.selected} onClick={(e) => this.guessPattern(e)}>
            <TopRightInsert />
          </TopRightButton>
        </SemiCircle>
        <SemiCircle>
          <BottomLeftButton id={3} selected={this.state.selected} onClick={(e) => this.guessPattern(e)}>
            <BottomLeftInsert />
          </BottomLeftButton>
          <BottomRightButton id={4} selected={this.state.selected} onClick={(e) => this.guessPattern(e)}>
            <BottomRightInsert />
          </BottomRightButton>
        </SemiCircle>
        <ButtonContainer>
          <StartButton onClick={() => this.startGame()}>Start</StartButton>
        </ButtonContainer>  
      </div>
    )
  } 

}
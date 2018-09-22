import React from 'react';
import { 
  SemiCircle, 
  StartButton,
  Score,
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
      timeInterval: 1000,
      score: 0,
      bestScore: 0,
      hidden: 0,
      startMessage: 'Start'
    }
    this.startGame = this.startGame.bind(this);
    this.generateNumber = this.generateNumber.bind(this);
    this.highlightButtons = this.highlightButtons.bind(this);
    this.guessPattern = this.guessPattern.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  generateNumber() {
    return Math.floor((Math.random() * 4) + 1);
  }

  startGame() {
    this.setState({
      pattern: [],
      selected: 0,
      guessIndex: 0,
      timeInterval: 1000,
      score: 0,
      hidden: 0,
      startMessage: 'Start'
    }, () => {
      this.state.pattern.push(this.generateNumber());
      setTimeout(this.highlightButtons, 500)
      ;
    })
  }

  highlightButtons() {
    let factor = 0;
    let timeInterval = this.state.timeInterval
    this.state.pattern.forEach((selected) => {
      setTimeout(() => { this.setState({ selected }); }, timeInterval * factor)
      factor++;
      setTimeout(() => { this.setState({ selected: 0 }); }, timeInterval * factor)
      factor++;
    })
  }

  guessPattern(e) {
    if (e.target.id === ''+this.state.pattern[this.state.guessIndex]) {
      let newIndex = this.state.guessIndex + 1;
      if (newIndex >= this.state.pattern.length) {
        this.setState({
          guessIndex: 0,
          score: this.state.score + 1,
          timeInterval: this.state.timeInterval * 0.85
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
      this.gameOver();
    }
  }

  gameOver() {
    this.setState({
      selected: this.state.pattern[this.state.guessIndex],
      guessIndex: 0,
      bestScore: this.state.score > this.state.bestScore ? this.state.score : this.state.bestScore,
      hidden: this.state.pattern[this.state.guessIndex],
      startMessage: 'Try Again?'
    })
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        <SemiCircle>
          <TopLeftButton id={1} selected={this.state.selected} hidden={this.state.hidden} onClick={(e) => this.guessPattern(e)}>
            <TopLeftInsert />
          </TopLeftButton>
          <TopRightButton id={2} selected={this.state.selected} hidden={this.state.hidden} onClick={(e) => this.guessPattern(e)}>
            <TopRightInsert />
          </TopRightButton>
        </SemiCircle>
        <SemiCircle>
          <BottomLeftButton id={3} selected={this.state.selected} hidden={this.state.hidden} onClick={(e) => this.guessPattern(e)}>
            <BottomLeftInsert />
          </BottomLeftButton>
          <BottomRightButton id={4} selected={this.state.selected} hidden={this.state.hidden} onClick={(e) => this.guessPattern(e)}>
            <BottomRightInsert />
          </BottomRightButton>
        </SemiCircle>
        <Score>Score: {this.state.score}</Score>
        <Score>Best Score: {this.state.bestScore}</Score>
        <ButtonContainer>
          <StartButton onClick={() => this.startGame()}>{this.state.startMessage}</StartButton>
        </ButtonContainer>  
      </div>
    )
  } 

}
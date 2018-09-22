import styles from 'styled-components';

export const AppHeader = styles.h1`
  text-align: center;
`;

export const Score = styles.div`
  text-align: center;
  margin: 16px
  font-size: 16px;
`;

export const SemiCircle = styles.div`
  text-align: center;
`;

export const ButtonContainer = styles.div`
  margin: 16px
  text-align: center;
`

export const StartButton = styles.button`
  outline: none;
  font-size: 16px;
  background: black;
  color: white;
  border: 2px solid white;
  border-radius: 3px
  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
  &:active {
    background: black;
    color: white;
    border: 2px solid white;
  }
`

// Game Button formatting - base properies with each quadrants specific dimensions
const Button = styles.div`
  margin: 2.5px 5px;
  display: inline-block
  width: 100px;
  height: 100px;
`

export const TopLeftButton = styles(Button)`
  background: red;
  border-radius: 100px 0 0 0;
  -moz-border-radius: 100px 0 0 0;
  -webkit-border-radius: 100px 0 0 0;
  background-image: ${props => props.selected === 1 ? "radial-gradient(farthest-side at 60%, white, #f22c36)" :  "none"};
  opacity: ${props => props.hidden !== 1 && props.hidden !== 0? "0" : "1"};
  transition: ${props => props.hidden !== 1 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -moz-transition: ${props => props.hidden !== 1 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -webkit-transition: ${props => props.hidden !== 1 && props.hidden !== 0? "opacity 2s linear" : "none"};
  &:active {
    background-image: radial-gradient(farthest-side at 60%, white, #f22c36);
  }
`;

export const TopRightButton = styles(Button)`
  background: green;
  border-radius: 0 100px 0 0;
  -moz-border-radius: 0 100px 0 0;
  -webkit-border-radius: 0 100px 0 0;
  background-image: ${props => props.selected === 2 ? "radial-gradient(farthest-side at 60%, white, #01b510)" :  "none"};
  opacity: ${props => props.hidden !== 2  && props.hidden !== 0? "0" : "1"};
  transition: ${props => props.hidden !== 2 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -moz-transition: ${props => props.hidden !== 2 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -webkit-transition: ${props => props.hidden !== 2 && props.hidden !== 0? "opacity 2s linear" : "none"};
  &:active {
    background-image: radial-gradient(farthest-side at 60%, white, #01b510);
  }

`;

export const BottomRightButton = styles(Button)`
  background: #f0d83c;
  border-radius: 0 0 100px 0;
  -moz-border-radius: 0 0 100px 0;
  -webkit-border-radius: 0 0 100px 0;
  background-image: ${props => props.selected === 4 ? "radial-gradient(farthest-side at 60%, white, yellow)" :  "none"};
  opacity: ${props => props.hidden !== 4 && props.hidden !== 0? "0" : "1"};
  transition: ${props => props.hidden !== 4 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -moz-transition: ${props => props.hidden !== 4 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -webkit-transition: ${props => props.hidden !== 4 && props.hidden !== 0? "opacity 2s linear" : "none"};
  &:active {
    background-image: radial-gradient(farthest-side at 60%, white, yellow);
  }
`;

export const BottomLeftButton = styles(Button)`
  background: blue;
  border-radius: 0 0 0 100px;
  -moz-border-radius: 0 0 0 100px;
  -webkit-border-radius: 0 0 0 100px;
  background-image: ${props => props.selected === 3 ? "radial-gradient(farthest-side at 60%, white, #2852fa)" :  "none"};
  opacity: ${props => props.hidden !== 3  && props.hidden !== 0? "0" : "1"};
  transition: ${props => props.hidden !== 3 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -moz-transition: ${props => props.hidden !== 3 && props.hidden !== 0? "opacity 2s linear" : "none"};
  -webkit-transition: ${props => props.hidden !== 3 && props.hidden !== 0? "opacity 2s linear" : "none"};
  &:active {
    background-image: radial-gradient(farthest-side at 60%, white, #2852fa);
  }
`;


// Insert formatting - base properies with each quadrants specific dimensions
const Insert = styles.div`
  width: 35px;
  height: 35px;
  background: black;
  &:hover {
    background: black;
  }
`

export const TopLeftInsert = styles(Insert)`
  margin-top: 65px;
  margin-left: 65px;
  border-radius: 35px 0 0 0;
  -moz-border-radius: 35px 0 0 0;
  -webkit-border-radius: 35px 0 0 0;
`;

export const TopRightInsert = styles(Insert)`
  margin-top: 65px;
  border-radius: 0 35px 0 0;
  -moz-border-radius: 0 35px 0 0;
  -webkit-border-radius: 0 35px 0 0;
`;

export const BottomLeftInsert = styles(Insert)`
  margin-bottom: 65px;
  margin-left: 65px;
  border-radius: 0 0 0 35px;
  -moz-border-radius: 0 0 0 35px;
  -webkit-border-radius: 0 0 0 35px;
`;

export const BottomRightInsert = styles(Insert)`
  border-radius: 0 0 35px 0;
  -moz-border-radius: 0 0 35px 0;
  -webkit-border-radius: 0 0 35px 0;
`;
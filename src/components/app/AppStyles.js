import styles from 'styled-components';

export const AppHeader = styles.h1`
  text-align: center;
`;

export const SemiCircle = styles.div`
  text-align: center;
`;

// Button formatting - base properies with each quadrants specific dimensions
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
  &:hover {
    background-image: radial-gradient(farthest-side at 60%, white, #f22c36);
  }

`;

export const TopRightButton = styles(Button)`
  background: green;
  border-radius: 0 100px 0 0;
  -moz-border-radius: 0 100px 0 0;
  -webkit-border-radius: 0 100px 0 0;
  &:hover {
    background-image: radial-gradient(farthest-side at 60%, white, #01b510);
  }

`;

export const BottomRightButton = styles(Button)`
  background: #f0d83c;
  border-radius: 0 0 100px 0;
  -moz-border-radius: 0 0 100px 0;
  -webkit-border-radius: 0 0 100px 0;
  &:hover {
    background-image: radial-gradient(farthest-side at 60%, white, yellow);
  }
`;

export const BottomLeftButton = styles(Button)`
  background: blue;
  border-radius: 0 0 0 100px;
  -moz-border-radius: 0 0 0 100px;
  -webkit-border-radius: 0 0 0 100px;
  &:hover {
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
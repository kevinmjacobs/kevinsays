import styles from 'styled-components';

export const AppHeader = styles.h1`
  text-align: center;
`;

export const TopDiv = styles.div`
  text-align: center;
`;

export const BottomDiv = styles.div`
  text-align: center;
`;

export const TopLeftButton = styles.span`
  margin: 2.5px 5px;
  display: inline-block
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 100px 0 0 0;
  -moz-border-radius: 100px 0 0 0;
  -webkit-border-radius: 100px 0 0 0;
  &:hover {
    background-image: radial-gradient(farthest-side at 50%, white, #f22c36);
  }


`;

export const TopRightButton = styles.span`
  margin: 2.5px 5px;
  display: inline-block
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 0 100px 0 0;
  -moz-border-radius: 0 100px 0 0;
  -webkit-border-radius: 0 100px 0 0;
  &:hover {
    background-image: radial-gradient(farthest-side at 50%, white, #01b510);
  }

`;

export const BottomRightButton = styles.span`
  margin: 2.5px 5px;
  display: inline-block
  width: 100px;
  height: 100px;
  background: #f0d83c;
  border-radius: 0 0 100px 0;
  -moz-border-radius: 0 0 100px 0;
  -webkit-border-radius: 0 0 100px 0;
  &:hover {
    background-image: radial-gradient(farthest-side at 50%, white, yellow);
  }
`;

export const BottomLeftButton = styles.span`
  margin: 2.5px 5px;
  display: inline-block  
  width: 100px;
  height: 100px;
  background: blue;
  border-radius: 0 0 0 100px;
  -moz-border-radius: 0 0 0 100px;
  -webkit-border-radius: 0 0 0 100px;
  &:hover {
    background-image: radial-gradient(farthest-side at 50%, white, #2852fa);
  }
`;
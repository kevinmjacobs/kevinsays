import React from 'react';
import { TopDiv, BottomDiv, TopLeftButton, TopRightButton, BottomLeftButton, BottomRightButton, AppHeader } from './AppStyles'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        <TopDiv>
          <TopLeftButton />
          <TopRightButton />
        </TopDiv>
        <BottomDiv>
          <BottomLeftButton />
          <BottomRightButton />
        </BottomDiv>
      </div>
    )
  } 

}
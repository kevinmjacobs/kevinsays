import React from 'react';
import { 
  TopDiv, 
  BottomDiv, 
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
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        <TopDiv>
          <TopLeftButton>
            <TopLeftInsert />
          </TopLeftButton>
          <TopRightButton>
            <TopRightInsert />
          </TopRightButton>
        </TopDiv>
        <BottomDiv>
          <BottomLeftButton>
            <BottomLeftInsert />
          </BottomLeftButton>
          <BottomRightButton>
            <BottomRightInsert />
          </BottomRightButton>
        </BottomDiv>
      </div>
    )
  } 

}
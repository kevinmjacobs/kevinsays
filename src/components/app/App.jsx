import React from 'react';
import { AppBody, AppHeader} from './AppStyles'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AppHeader>Kevin Says</AppHeader>
        Do what I say!
      </div>
    )
  } 

}
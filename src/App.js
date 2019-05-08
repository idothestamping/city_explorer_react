import React from 'react';
import Header from './header.js';
import Main from './main.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // waiting for lab
    }

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
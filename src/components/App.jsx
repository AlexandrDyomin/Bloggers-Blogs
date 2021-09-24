import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  render() {   
    return(
      <div>
        <Header { ...this.props } />
        <Main { ...this.props } />
      </div>
    );
  }
}

export default App;

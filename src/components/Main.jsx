import React, { Component } from 'react';
import NavBar from './NavBar';
import ViewArea from './ViewArea';

class Main extends React.Component {
  render() {
    let underHeaderStyle = {
      display: 'flex',
    };
    return(
      <div style={ underHeaderStyle }>
        <NavBar { ...this.props }/>
        <ViewArea />
      </div>
    );
  }
}

export default Main;

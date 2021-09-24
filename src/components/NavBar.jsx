import React, { Component } from 'react';
import createListComponents from '../functions/createListComponents'

class NavBar extends React.Component {
  render() {
    let navBarStyle= {
      padding: 10,
      margin: 10
    };
    let textStyle = {
      textAlign: 'left',
      marginBottom: 15,
      marginTop: 10,
      fontFamily: 'Courier',
      fontSize: 20,
      opacity: 0.5,
      fontWeight: 'bold',
      borderBottom: '1px solid blue'
    };

    return(
      <div style={ navBarStyle }>
        <div style={ textStyle }>Темы</div>
        { createListComponents( this.props.themesList ) }
        <div style={ textStyle }>Другие возможности</div>
        { createListComponents( this.props.data ) }
      </div>
    );
  }
}

export default NavBar;

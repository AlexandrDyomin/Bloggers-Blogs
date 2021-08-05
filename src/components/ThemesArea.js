import React, {Component} from 'react';
import createListComponents from './functions/createListComponents'

class ThemesArea extends React.Component {
  render() {
    let themesAreaStyle= {
      width: '15%',
      height: '84vh',
      margin: '5px 5px 5px 0px',
      padding: 5
    };
    let textStyle = {
      textAlign: 'left',
      marginBottom: 15,
      fontFamily: 'Courier',
      fontSize: 20,
      opacity: 0.5,
      fontWeight: 'bold',
      borderBottom: '1px solid blue'
    };

    return(
      <div style={themesAreaStyle}>
        <div style={textStyle}>Темы</div>
        {createListComponents(this.props.themesList)}
      </div>
    );
  }
}

export default ThemesArea;

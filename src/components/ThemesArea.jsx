import React, {Component} from 'react';
import createListComponents from '../functions/createListComponents'

class ThemesArea extends React.Component {
  render() {
    let themesAreaStyle= {
      width: '15%',
      height: '45vh',
      padding: 5,
      background: 'blue'
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
      <div style={themesAreaStyle}>
        <div style={textStyle}>Темы</div>
        {createListComponents(this.props.themesList)}
      </div>
    );
  }
}

export default ThemesArea;

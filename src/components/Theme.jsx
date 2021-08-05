import React, {Component} from 'react';

class Theme extends React.Component {
  render() {
    let imgStyle = {
      height: '30px',
      width: '30px',
      borderRadius: '20px',
      cursor: 'pointer'
    };

    let themeStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      background: 'red'
    };

    let nameTemeStyle = {
      marginLeft: '15px',
      fontSize: 20,
      fontFamily: 'Courier',
      overflow: 'hidden',
      cursor: 'pointer'
    };

    return(
      <div style={themeStyle}>
        <img src={this.props.img} style={imgStyle}/>
        <span style={nameTemeStyle}>{this.props.nameTheme}</span>
      </div>
    );
  }
}

export default Theme;

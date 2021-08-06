import React, {Component} from 'react';

class ElemSideBar extends React.Component {
  render() {
    let imgStyle = {
      height: '30px',
      width: '30px',
      borderRadius: '20px',
      cursor: 'pointer'
    };

    let elementStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10
    };

    let textStyle = {
      marginLeft: '15px',
      fontSize: 20,
      fontFamily: 'Courier',
      overflow: 'hidden',
      cursor: 'pointer'
    };

    return(
      <div style={elementStyle}>
        <img src={this.props.image} style={imgStyle}/>
        <span style={textStyle}>{this.props.text}</span>
      </div>
    );
  }
}

export default ElemSideBar;

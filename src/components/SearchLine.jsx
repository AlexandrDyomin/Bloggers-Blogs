import React, { Component } from 'react';

class SearchLine extends React.Component {
  render() {
    let searchLineStyle = {
      backgroundColor:'white',
      flex: '1 0 30vw',
      borderRadius: '10px 0px 0px 10px',
      border: 'none',
      paddingLeft: '10px',
      outline: 'none'
    };

    return(
      <input type='search' placeholder={ this.props.altTextSearchLine } 
        style={ searchLineStyle } autoFocus />
    );
  }
}

export default SearchLine;

import React, {Component} from 'react';

class SearchLine extends React.Component {
  render() {

  let searchLineStyle = {
    backgroundColor:'white',
    width: '90%',
    borderRadius: '10px 0px 0px 10px',
    border: 'none',
    paddingLeft: '10px',
    outline: 'none'
  };

    return(
      <input
        type='search'
        placeholder={this.props.altTextSearchLine}
        style={searchLineStyle}
      />
    );
  }
}

export default SearchLine;

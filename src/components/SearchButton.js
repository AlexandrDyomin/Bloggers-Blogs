import React, {Component} from 'react';

class SearchButton extends React.Component {
  render() {
    let searchButtonStyle = {
        backgroundColor: '#F5FF86',
        borderRadius: '0 10px 10px 0',
        border: 'none',
        width: '10%',
        cursor: 'pointer',
    };

    return(
      <input
        type='submit'
        style={searchButtonStyle}
        value={this.props.nameSearchButton}
      />
    );
  }
}

export default SearchButton;

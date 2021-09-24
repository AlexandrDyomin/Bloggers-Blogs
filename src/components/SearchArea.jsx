import React, { Component }from 'react';
import SearchButton from './SearchButton';
import SearchLine from './SearchLine';

class SearchArea extends React.Component {
  render(){
    let searchAreaStyle = {
      width: '550px',
      height: '28px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 5
    };

    return (
      <div style={ searchAreaStyle }>
        <SearchLine { ...this.props } />
        <SearchButton { ...this.props } />
      </div>
    );
  }
}

export default SearchArea;

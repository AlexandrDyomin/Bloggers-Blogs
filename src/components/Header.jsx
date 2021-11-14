import React from 'react';
import SearchArea from './SearchArea';
import LoginButton from './LoginButton';

class Header extends React.Component {
  
  render() {
    let headerStyle = {
      height: "10vh",
      backgroundImage: `url( ${ this.props.backgroundHeader } )`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      overflow: 'hidden',
      padding: 5
    };

    let textStyle = {
      fontSize: '2em',
      color:'#F5FF86',
      fontFamily: 'Courier',
      fontWeight: 'bold',
      cursor: 'pointer',
      margin: 5
    };

    return (
      <div style={ headerStyle }>
        <span style={ textStyle }>{ this.props.nameSite }</span>
        <SearchArea { ...this.props } />
        <LoginButton { ...this.props } />
      </div>
    );
  }
}

export default Header;

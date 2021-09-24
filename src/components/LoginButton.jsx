import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginButton extends React.Component {
  render() {
    let loginButtonStyle = {
      backgroundColor: '#F5FF86',
      border: 'none',
      borderRadius: '10px',
      height: '28px',
      cursor: 'pointer',
      margin: 5
    }

  return(
    <NavLink to='/login'>
      <input type='submit'style={ loginButtonStyle } 
        value={ this.props.nameLoginButton } />
    </NavLink>
    );
  }
}

export default LoginButton;

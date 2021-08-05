import React, {Component} from 'react';

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
      <input
        type='submit'
        style={loginButtonStyle}
        value={this.props.nameLoginButton}
      />
    );
  }
}

export default LoginButton;

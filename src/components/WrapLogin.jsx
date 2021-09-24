import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

class WrapLogin extends React.Component {
  render() {
    return(
      <Switch>
        <Route path='/login/registration' component={ Registration } />
        <Route component={ Authorization } />
      </Switch>
    );
  }
}

class Authorization extends React.Component {
  render() {
    return(
      <div>
        <h6>Войти</h6>
        <form method='post' action="http://localhost:3001/authorization">
          <input name='login' placeholder='login' />
          <input name='password' type='password' placeholder='password' />
          <input type='submit' value="Войти"/>
        </form>
        <NavLink to='login/registration'>Зарегистрироваться</NavLink>
      </div>
    );
  }
}

class Registration extends React.Component {
  render() {
    return(
      <div>
        <h6>Зарегистрироваться</h6>
        <form  method='post' action="http://localhost:3001/registration">
          <input name='name' placeholder='name' />
          <input name='surname' placeholder='surname' />
          <input name='login' placeholder='login' />
          <input name='password' type='password' placeholder='password' />
          <input type='submit' value="Зарегистрироваться"/>
        </form>
      </div>
    );
  }
}

export default WrapLogin;

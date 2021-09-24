import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WrapLogin from './WrapLogin';
import WrapChannel from './WrapChannel';
import WrapArticle from './WrapArticle';

class ViewArea extends React.Component {
  render() {
    return(
      <Switch >
        <Route path='/login' component={ WrapLogin } />
        <Route path='/create-channel' component={ WrapChannel } />
        <Route path='/create-article' component={ WrapArticle } />
      </Switch>
    );
  }
}

export default ViewArea;



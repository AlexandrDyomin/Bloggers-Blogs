import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WrapLogin from './WrapLogin';
import WrapChannel from './WrapChannel';
import NewArticle from "./NewArticle/NewArticle.jsx";

class ViewArea extends React.Component {
  render() {
    return(
      <Switch >
        <Route path='/login' component={ WrapLogin } />
        <Route path='/create-channel' component={ WrapChannel } />
        <Route path='/create-article' component={ NewArticle } />
      </Switch>
    );
  }
}

export default ViewArea;



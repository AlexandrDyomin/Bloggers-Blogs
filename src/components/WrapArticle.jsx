import React, { Component } from 'react';

class WrapArticle extends React.Component {
  render() {
    return(
      <div>
        <h6>Создать статью</h6>
        <FormArticle/>
      </div>
    );
  }
}

class FormArticle extends React.Component {
  render() {
    return(
      <form method='post' encType='multimart/form-data' action="http://localhost:3001/create-article" >
        <input name='channel' placeholder='channel'/>
        <input name='theme' placeholder='theme'/>
        <input name='title' placeholder='title' />
        <textarea name="article" cols="30" rows="10" ></textarea>
        <input type='submit' value='Опубликовать' />
      </form>           
    );
  }
}

export default WrapArticle;
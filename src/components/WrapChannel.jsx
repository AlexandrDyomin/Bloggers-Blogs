import React, { Component } from 'react';

class WrapChannel extends React.Component {
  render() {
    return(
      <div>
        <h6>Создание канала</h6>
        <FormChannel />
      </div>
    );
  }
}

class FormChannel extends React.Component {
  render() {
    return(
      <form method='post' encType='multipart/form-data' 
        action='http://localhost:3001/create-channel'>
        <input name='name' placeholder='название канала' />
        <input name='image' placeholder='загрузить логотип' type='file' />
        <input name='author' placeholder='автор' />
        <input type="submit" value="Создать канал" />
      </form>
    );
  }
}

export default WrapChannel;
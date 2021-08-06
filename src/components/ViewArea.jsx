import React, {Component} from 'react';

class ViewArea extends React.Component {
  render() {
    let viewAreaStyle = {
      width: '85vw',
      margin: '10px 10px 10px 0px',
      padding: 20
    };

    return(
      <div style={viewAreaStyle}>
        Тут будут отображаться статьи и еще много чего
      </div>
    );
  }
}

export default ViewArea;

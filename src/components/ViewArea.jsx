import React, {Component} from 'react';

class ViewArea extends React.Component {
  render() {
    let viewAreaStyle = {
      backgroundColor: 'gold',
      width: '85vw'
    };

    return(
      <div style={viewAreaStyle}>
        Тут будут отображаться статьи и еще много чего
      </div>
    );
  }
}

export default ViewArea;

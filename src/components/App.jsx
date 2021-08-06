import React, {Component} from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ViewArea from './ViewArea';

class App extends React.Component {
  render() {
    let underHeaderStyle = {
      display: 'flex',
      width: '100vw'
    };
    return(
      <div>
        <Header {...this.props} />
        <div style={underHeaderStyle}>
          <NavBar {...this.props} />
          <ViewArea />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Header from './Header';
import ThemesArea from './ThemesArea';
import ViewArea from './ViewArea';

class App extends React.Component {
  render() {
    let underHeaderStyle = {
      display: 'flex'
    };
    return(
      <div>
        <Header {...this.props} />
        <div style={underHeaderStyle}>
          <ThemesArea {...this.props} />
          <ViewArea />
        </div>
      </div>
    );
  }
}

export default App;

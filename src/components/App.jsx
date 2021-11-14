import Header from './Header';
import Main from './Main';

const App = ( props ) => {    
  return(
    <div>
      <Header { ...props } />
      <Main { ...props } />
    </div>
  );
}

export default App;

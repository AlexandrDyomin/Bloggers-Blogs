import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import themesList, { data } from './data';

const destination = document.querySelector("#root");

ReactDOM.render(
  <BrowserRouter>
	  <App
	    backgroundHeader={ require( "./img/backgroundHeader.jpg" ).default }
	    nameSite='Bloggers&Blogs' altTextSearchLine='Введите запрос'
	    nameSearchButton='Искать' nameLoginButton='Войти'
	    themesList={themesList}	data={data}/>
	</BrowserRouter>,
  destination
);
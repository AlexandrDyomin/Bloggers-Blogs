import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import themesList, {data} from './data'

const destination = document.querySelector("#root");

ReactDOM.render(
  <App
    backgroundHeader={require("./img/backgroundHeader.jpg").default}
    nameSite='Bloggers&Blogs'
    altTextSearchLine='Введите запрос'
    nameSearchButton='Искать'
    nameLoginButton='Войти'
    themesList={themesList}
    data={data}/>,
  destination
);

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ThemesArea from './components/ThemesArea';

let themesList = [
  {
    theme: 'Архитектура',
    image: require("./img/Архитектура.jpg").default
  },{
    theme: 'Автомобили',
    image: require("./img/Автомобили.jpg").default
  },{
    theme: 'Технологии',
    image: require("./img/Технологии.jpg").default
  },{
    theme: 'Мода',
    image: require("./img/Мода.jpg").default
  },{
    theme: 'Здоровье',
    image: require("./img/Здоровье.jpg").default
  },{
    theme: 'Финансы',
    image: require("./img/Финансы.jpg").default
  },{
    theme: 'Политика',
    image: require("./img/Политика.jpg").default
  }
];

const destination = document.querySelector("#root");

ReactDOM.render(
  <div>
    <Header
      backgroundHeader={require("./img/backgroundHeader.jpg").default}
      nameSite='Bloggers&Blogs'
      altTextSearchLine='Введите запрос'
      nameSearchButton='Искать'
      nameLoginButton='Войти'
    />
    <ThemesArea themesList={themesList}/>
  </div>,
  destination
);

import React from 'react';
import classnames from 'classnames/bind'
import styles from './App.scss';
import WeatherContainer from './containers/WeatherContainer';

const ex = classnames.bind(styles)

function App() {
  return (
    <div className={ex('content_body')}>
      안녕안녕
      <WeatherContainer />
    </div>
  );
}

export default App;

import React from 'react';
import Cronometro from '../components/cronometro';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro/>
    </div>
  );
}

export default App;

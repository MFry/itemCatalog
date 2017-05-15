import '../../css/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';

ReactDOM.render(
  <div>
        <Header />
        <Content />
  </div>,
  document.getElementById('app')
);

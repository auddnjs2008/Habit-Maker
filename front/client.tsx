import style from '@components/globalStyles';
import { Global } from '@emotion/react';
import App from '@layouts/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Global styles={style} />
    <App />
  </BrowserRouter>,
  document.querySelector('#root'),
);

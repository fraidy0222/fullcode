import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConfigProvider} from 'antd'
import es from 'antd/es/locale/es_ES'

ReactDOM.render(
    <ConfigProvider locale={es}>
    <App />
    </ConfigProvider>,
  document.getElementById('root')
);

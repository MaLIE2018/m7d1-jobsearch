import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import store from "../src/store/index"
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <Router><App /></Router>
  </Provider>
    ,
  document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {createStore} from 'redux';
// import reducer from './reducers/reducer';

// const store=createStore(reducer);


import 'bootstrap/dist/css/bootstrap.min.css';
import './jquery.fireworks.js'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Modal from './components/Offers_zone/Modal';

import Profile_Main from './components/Profile/Profile_Main'

import LoginComponent from './components/Login/LoginComponent'


 //import store from './store/configureStore';

// console.log("+++++++++",store.getState());

ReactDOM.render(


  <App/>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

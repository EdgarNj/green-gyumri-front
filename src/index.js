import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import "./i18n"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store"
import moment from 'moment-timezone';

const root = ReactDOM.createRoot(document.getElementById('root'));
moment.tz.setDefault('UTC');
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();

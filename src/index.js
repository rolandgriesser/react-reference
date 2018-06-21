import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { demoApp } from "./reducers/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render((
    <Provider store={createStore(demoApp)}>
        <App />
    </Provider>), document.getElementById('root'));
registerServiceWorker();


/*
DEBUGGING
1. Install Debugger for Chrome 


{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
} */
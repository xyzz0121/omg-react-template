/**
 * 入口文件
 * author
 * time
 */
import * as React from "react";
import * as ReactDOM from 'react-dom';

import store from './store';
import { Provider } from "react-redux";
import { MyRouter } from "./routers";
import { Home } from "./pages";

import FastClick from 'fastclick';
FastClick.attach(document.body);

import './assets/style/reset.scss';



ReactDOM.render(<Provider store={store}>
    <MyRouter />
</Provider>, document.getElementById("app"));
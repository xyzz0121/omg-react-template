/**
 * 入口文件
 * zhouyang20
 * 2019.03.27
 */
import * as React from "react";
import * as ReactDOM from 'react-dom';

import store from './store';
import { Provider } from "react-redux";

import FastClick from 'fastclick';
FastClick.attach(document.body);

//TODO：上线前干掉
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// const vConsole = new VConsole(); 

import './assets/style/common.scss';

const routDom =   {{#if need}} <Provider store={store}>哈哈</Provider> {{else}} <p>is not email</p> {{/if}}


ReactDOM.render(<Provider store={store}>
    哈哈
</Provider>, document.getElementById("app"));
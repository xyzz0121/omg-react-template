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

import FastClick from 'fastclick';
FastClick.attach(document.body);


//TODO：上线前干掉
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// const vConsole = new VConsole(); 

import './assets/style/reset.scss';

ReactDOM.render(<Provider store={store}>
    {/* {{#if need}}
        <MyRouter />
    {{ else}}
        <p>is not email</p>
    {{/if}} */}
    <MyRouter></MyRouter>
</Provider>, document.getElementById("app"));
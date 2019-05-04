/**
 * 入口文件
 * author
 * time
 */
import * as React from "react";
import * as ReactDOM from 'react-dom';

import store from './store';
import { Provider } from "react-redux";
{{#if isNeedRouter}}
import { MyRouter } from "./routers";
{{ else}}
import { Home } from "./pages";
{{/if}}

import FastClick from 'fastclick';
FastClick.attach(document.body);

import './assets/style/reset.scss';



ReactDOM.render(<Provider store={store}>
	{{#if isNeedRouter}}
    <MyRouter />
	{{ else}}
		<Home />
	{{/if}}
</Provider>, document.getElementById("app"));
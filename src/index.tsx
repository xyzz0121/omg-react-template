/**
 * 入口文件
 * author
 * time
 */
import * as React from "react";
import * as ReactDOM from 'react-dom';

{{#if isNeedRedux}}
import store from './store';
import { Provider } from "react-redux";
{{/if}}

{{#if isNeedRouter}}
import { MyRouter } from "./routers";
{{ else}}
import { Home } from "./pages";
{{/if}}
{{#if isInMobile}} 
import FastClick from 'fastclick';
FastClick.attach(document.body);
{{/if}}

import './assets/style/reset.scss';

{{#if isNeedRedux}}
ReactDOM.render(<Provider store={store}>
	{{#if isNeedRouter}}
    <MyRouter />
	{{ else}}
		<Home />
	{{/if}}
</Provider>, document.getElementById("app"));
{{ else}}
ReactDOM.render(
	{{#if isNeedRouter}}
    <MyRouter />
	{{ else}}
		<Home />
	{{/if}}
, document.getElementById("app"));
{{/if}}

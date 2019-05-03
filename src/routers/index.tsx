/**
 * 路由中心
 */
import * as React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import { Detail, Home } from "../pages";


export const MyRouter = () => {
	return (
		<HashRouter>
			<Switch>
				{/* 登录 */}
				<Route exact path="/" component={Home} />
				{/* 详情页 */}
				<Route exact path='/detail/:infoId' component={Detail} />
			</Switch>
		</HashRouter>
	)
}

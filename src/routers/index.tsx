/**
 * 路由中心
 * author
 * time
 */
import * as React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import { Detail, Home } from "../pages";
import { ScrollToTop } from "../components";


export const MyRouter = () => {
	return (
		<HashRouter>
			<ScrollToTop>
				<Switch>
					{/* 首页 */}
					<Route exact path="/" component={Home} />
					{/* 详情页 */}
					<Route exact path='/detail/:infoId' component={Detail} />
					{/* 在这里继续添加... */}
				</Switch>
			</ScrollToTop>
		</HashRouter>
	)
}

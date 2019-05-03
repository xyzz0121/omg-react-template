/**
 * 首页
 */
import * as React from 'react';
import { LoginState } from "./index.d";
import { HomeBtn, HomeContent } from "../../components";
import "./index.scss";



export default class Home extends React.Component<any, LoginState> {
	render() {
		return (
			<div className="home">
				<div className="home-header"></div>
				<HomeContent/>
				<HomeBtn/>
			</div>
		)
	}
}



/**
 * 首页
 */
import * as React from 'react';
import { HomeState } from "./index.d";
import { HomeBtn, HomeContent } from "../../components";
import "./index.scss";



export default class Home extends React.Component<any, HomeState> {
	state = {
		currNum: 0
	}
	addNumber = () => {
		this.setState({
			currNum: this.state.currNum + 1
		})
	}
	render() {
		return (
			<div className="home">
				<div className="home-header"></div>
				<HomeContent />
				<HomeBtn />
			</div>
		)
	}
}



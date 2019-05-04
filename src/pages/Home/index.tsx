/**
 * 首页
 */
import * as React from 'react';
import { HomeState } from "./index.d";
import { HomeBtn, HomeContent } from "../../components";
import "./index.scss";



export default class Home extends React.Component<any, HomeState> {
	{{#if isNeedRedux}}
	{{else}}
	state = {
		currNum: 0
	}
	addNumber = () => {
		this.setState({
			currNum: this.state.currNum + 1
		})
	}
	{{/if}}
	
	render() {
		return (
			<div className="home">
				<div className="home-header"></div>
				{{#if isNeedRedux}}
				<HomeContent />
				<HomeBtn />
				{{else}}
				<HomeContent 
					currNum={this.state.currNum}
				/>
				<HomeBtn 
					AddNumber={this.addNumber}
					currNum={this.state.currNum}
				/>
				{{/if}}
			</div>
		)
	}
}



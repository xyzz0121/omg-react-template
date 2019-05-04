/**
 * home btn 组件
 * author
 * time
 */
import * as React from 'react';
import "./index.scss";
import { connect } from 'react-redux';
import { addNumber } from '../../../store/actions/home';
import { HomeBtnProps } from "./index.d";



class HomeBtn extends React.Component<HomeBtnProps, any> {
	handleBtn = () => {
		const { AddNumber, currNum } = this.props;
		AddNumber(currNum+1);
	}
	render() {
		return (
			<div onClick={this.handleBtn} className="homeBtn">
				click me！
      </div>
		)
	}
}
//需要得到store中的什么数据
const mapStateToProps = (store): any => {
	return {
		currNum: store.home.num
	}
}
//需要触发什么行为
const mapDispatchToProps = (dispatch): any => {
	return {
		AddNumber: (num: number) => dispatch(addNumber(num)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBtn)
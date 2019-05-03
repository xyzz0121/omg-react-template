/**
 * 登录页
 * zhouyang20
 * 2019.03.28
 */
import * as React from 'react';
import { LoginState } from "./index.d";
import { connect } from 'react-redux';
import "./index.scss";



class index extends React.Component<any, LoginState> {
	render() {
		return (
			<div>
				login
			</div>
		)
	}
}

//需要得到store中的什么数据
const mapStateToProps = (store): any => {
	return store
}


export default connect(mapStateToProps)(index)

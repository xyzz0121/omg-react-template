/**
 * home btn 组件
 * author
 * time
 */
import * as React from 'react';
import "./index.scss";
import { connect } from 'react-redux';
import { HomeContentProps } from "./index.d";
import { Link } from 'react-router-dom';



class HomeContent extends React.Component<HomeContentProps,any> {

  render() {
    const { currNum } = this.props;
    return (
      <div className="homeContent">
        <div className="homeContent-number">点了{currNum}次了</div>
        <Link to='/detail/999'>跳转详情页</Link>
      </div>
    )
  }
}
const mapStateToProps = (store): any => {
	return {
		currNum: store.home.num
	}
}

export default connect(mapStateToProps)(HomeContent)

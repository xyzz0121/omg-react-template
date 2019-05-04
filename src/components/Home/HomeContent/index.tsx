/**
 * home btn 组件
 * author
 * time
 */
import * as React from 'react';
import "./index.scss";
{{#if isNeedRedux}}
import { connect } from 'react-redux';
{{/if}}
import { HomeContentProps } from "./index.d";
{{#if isNeedRouter}} 
import { Link } from 'react-router-dom';
{{/if}}




class HomeContent extends React.Component<HomeContentProps,any> {
  render() {
    const { currNum } = this.props;
    return (
      <div className="homeContent">
        <div className="homeContent-number">点了{currNum}次了</div>
        {{#if isNeedRouter}} 
          <Link to={`/detail/${currNum}`}>跳转详情页</Link>
        {{/if}}
      </div>
    )
  }
}

{{#if isNeedRedux}}
const mapStateToProps = (store): any => {
	return {
		currNum: store.home.num
	}
}
export default connect(mapStateToProps)(HomeContent)
{{else}}
export default HomeContent
{{/if}}


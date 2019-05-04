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
        <div className="homeContent-number">click {currNum} times!</div>
        {{#if isNeedRouter}} 
          <Link to={`/detail/${currNum}`}>jump detail!</Link>
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


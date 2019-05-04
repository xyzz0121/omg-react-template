/**
 * 回到顶部组件(解决react-router4+版本切换路由，页面位置仍停留在上个页面位置的问题)
 * author
 * time
 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<any,any> {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}
export default withRouter(ScrollToTop);
/**
 * 页面中心
 * author
 * time
 */
import Home from './Home';
{{#if isNeedRouter}}
import Detail from "./Detail";
{{ else}}


export {
    Home,
    {{#if isNeedRouter}}
    Detail
    {{ else}}
}
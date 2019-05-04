/**
 * 页面中心
 * author
 * time
 */
import Home from './Home';
{{#if isNeedRouter}}
import Detail from "./Detail";
{{/if}}


export {
    Home,
    {{#if isNeedRouter}}
    Detail
    {{/if}}
}
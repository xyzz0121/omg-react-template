/**
 * components center
 * author
 * time
 */
{{#if isNeedRouter}} 
//Common
import ScrollToTop from "./Common/ScrollToTop";
{{/if}}

//Home
import HomeBtn from "./Home/HomeBtn";
import HomeContent from "./Home/HomeContent";

export {
    HomeBtn,
    HomeContent,
    {{#if isNeedRouter}} 
    ScrollToTop
    {{/if}}
    
}
{{#if isNeedRedux}}
interface HomeContentProps {
    currNum?: number,
}
{{else}}
interface HomeContentProps {
    currNum: number,
}
{{/if}}

export {
    HomeContentProps
}
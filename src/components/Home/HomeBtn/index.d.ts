{{#if isNeedRedux}}
interface HomeBtnProps {
    AddNumber?: any,
    currNum?: number
}
{{else}}
interface HomeBtnProps {
    AddNumber: any,
    currNum: number
}
{{/if}}

export {
    HomeBtnProps
}
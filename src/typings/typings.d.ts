/**
 * 全局声明、外部变量声明
 */

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "json!*" {
    const value: any;
    export default value;
}

declare module 'module-name' {
    export type MyType = number
    export type MyDefaultType = { a:string }
    export let myExport: MyType
    let MyDefaultExport: MyDefaultType
    export default MyDefaultExport
}

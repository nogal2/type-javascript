type Cat = {name:string, purrs:boolean}
type Dog = {name:string, barks:boolean, wags:boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let a:CatOrDogOrBoth = {
    name:'Bon',
    purrs: true
}

a = {
    name: 'Domino',
    barks: true,
    wags: true
}

a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true,
}

b = {
    name:'Dog',
    purrs: true
}

function trueOrNull(isTrue: boolean) {
    if(isTrue) return 'true'
    return null
}
type Returns = string | null

function re(a:string, b:number) {
    return a || b   // 조건이 참이면 string 아니면 number
}
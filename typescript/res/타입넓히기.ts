/* 
let a = 'x'
let b = 3
var c = true
const d = {x:3}
 */

let a: 'x' = 'x'
let b: 3 = 3
var c: true = true
const d: {x:3} = {x:3}

let e = {x:3} as const
let f = [1, {x:2}]
let g = [1, {x:2}] as const

type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

const abc = new API({baseURL: 'sef', cacheSize: 21, tier:'dev'});
console.log(abc)  // API { options: { baseURL: 'sef', cacheSize: 21, tier: 'dev' } }

new API({
  baseURL: 'https://api.mysite.com',
  tier: 'prod'
})

new API({
  baseURL:'https://api.mysite.com',
  badTier: 'prod'
})

new API ({
  baseURL:'https://api.mysite.com',
  badTier: 'prod'
} as Options)

let badOptions = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod',
}
new API(badOptions)

let options: Options = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(options);


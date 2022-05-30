type Food = {
  calories: number
  tasty: boolean
}

type Sushi = Food & {
  salty: boolean
}

type Cake = Food & {
  sweet: boolean
}

interface IFood {
  calories: number
  tasty: boolean
}

interface ISushi extends Food {
  salty: boolean
}

interface ICake extends Food {
  sweet: boolean
}

interface A {
  good(x: number): string
  bad(x:number): string
}

interface B extends A {
  good(x:string | number): string
  bad(x:string): string
}

type a = {
  good(x: number): string
  bad(x:number): string
}

type b = a & {
  good(x:string | number): string
  bad(x:string): string // bad를 오버로드함.
}
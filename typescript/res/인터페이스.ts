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

// User는 name이라는 한 개의 필드를 가짐
interface User {
  name: string
}

// User 는 name, age 두 개의 필드를 가짐
interface User {
  age: number
}

let a: User = {
  name: "홍길동",
  age:24
}

interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal {
  name = 'navi'
  eat(food:string) {
    console.info('Ate some', food, '. Mmm!')
  }

  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  }
  meow() {
    console.log("CAT")
  }
}

const abc = new Cat();
console.log(abc)
abc.meow()



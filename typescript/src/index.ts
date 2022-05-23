let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}
}

c = new Person('matt', 'smith')
console.log(c)
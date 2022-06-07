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
  
  
  
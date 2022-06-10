class Animal {}

class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird;
}

//chirp(new Animal) // Error
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp();
}

function birdToBird(b: Bird):Bird {
  return b;
}

clone(birdToBird);  // OK

function birdToCrow(d:Bird): Crow {
  return new Crow();
}
clone(birdToCrow);  // OK

function birdToAnimal(d:Bird): Animal {
  return new Animal();
}
// clone(birdToAnimal) // 함수 반환타입이 Animal이면 bird의 슈퍼타입 이기 때문에 안된다.

function animalToBird(a: Animal): Bird {
  return new Bird;
}
clone(animalToBird);

function crowToBird(c: Crow): Bird {
  c.caw()
  return new Bird;
}
// clone(crowToBird); // 함수를 다른 함수에 할당하려면 'this를 포함한 매개변수 타입 >: 할당하려는 함수의 대응 매개변수 타입' 이어야 한다. 왼쪽이 슈퍼타입이어야 함.
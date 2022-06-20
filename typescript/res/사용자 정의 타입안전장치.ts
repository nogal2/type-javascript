function isString(a: unknown): a is string {
    return typeof a === 'string'
  }
  // 반환 타입을 boolean으로 하면 한 영영에서 다른 영역으로 이동할 때 사라지므로 적용이 안된다.
  // 그래서 타입 안전장치를 사용해야 한다.
  // a is string 대신 boolean 으로 대체해보자.
  isString('a');
  isString([7]);
  
  console.log(isString([7]));
  
  function parseInput(input: string | number) {
    let formattedInput: string
    const a = isString(input)
    if (a) {
      formattedInput = input.toUpperCase();
    }
  }
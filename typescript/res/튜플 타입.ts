function tuple<T extends unknown[]>(...ts:T): T {
    return ts
  }
  
  let a = tuple(1, true, 'asef');

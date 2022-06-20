type ToArray<T> = T[];
type A = ToArray<number>
type B = ToArray<number | string>

type ToArray2<T> = T extends unknown ? T[] : T[]
type A2 = ToArray2<number>
type B2 = ToArray2<number | string>

type Without<T, U> = T extends U ? never : T
type A3 = Without<boolean | number | string, boolean>

/* 
  타입 추론 순서
  1.
  type A = Without<boolean | number | string, boolean>

  2.
  type A = Without<boolean, boolean> |
           Without<number, boolean>  |
           Without<string, boolean>  |

  3.
  type A = never |
           number |
           string |
  
  4.
  type A = number | string
*/


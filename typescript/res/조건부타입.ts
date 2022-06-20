type IsString<T> = T extends string ? // T는 string의 버스타입인가?
                  true : false;

type A = IsString<string>
type B = IsString<number>
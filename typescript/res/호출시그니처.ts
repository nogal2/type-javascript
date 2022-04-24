// greet(name:string) 함수
type Greet = (name: string) => string;

// log(message: string, userId?:string) 함수
type Log = (message: string, userId?: string) => void;

// SumVariadicSafe = (...numbers: number[]) => number 함수
type SumVariadicSafe = (...numbers: number[]) => number;

let log: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};
log("me", "sdme");

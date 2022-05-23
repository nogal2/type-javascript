type abc = {
    a:string,
    A:String
  }
  let str:string = '문자열'
  let str2:String = new String('문자열'); 
  console.log(typeof str)
  console.log(typeof str2)
  console.log(str.valueOf())
  console.log(str2.valueOf())
  console.log(str===str2)
  
  let str3:String = "문자"
  function a(arg:String) {
    console.log(typeof arg)
  }
  a(str3)
  
  let str4:abc = {
    a:'smel',
    A:'smel'
  }
  console.log(str4.a === str4.A)
  console.log(typeof str4.a)
  console.log(typeof str4.A)


type Filter = {
    <T>(array:T[], f: (item:T) => boolean): T[]
  }
  
  let names = [
    {firstName: 'beth'},
    {firstName: 'caitlyn'},
    {firstName: 'xin'}
  ]
  
  let filter:Filter = (array, f) => []
  
  filter([1,2,3], val=>val>2)
  filter(['a','b'], val=> val !== 'b')
  filter(names, val => val.firstName.startsWith('b'))
  
  type Filter2<T> = {
    (array:T[], f: (item:T) => boolean): T[]
  }
  
  let filter2: Filter2 = (array, f) => []
  
  let filter3:Filter2<number> = (array, f) => []
  type StringFilter = Filter2<string>
  let stringFilter:StringFilter = (array, f) => []
  
  
type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

// 모든 필드를 선택형으로 만듦
type OptionalAccount = {
  [ K in keyof Account]?: Account[K]
}
let a:OptionalAccount = {
  id: 123,
  isEmployee: true,
}

// 모든 필드를 nullable로 만듦
type NullableAccount = {
  [ K in keyof Account]: Account[K] | null
}
let b: NullableAccount = {
  id: 123,
  isEmployee: null,
  notes: ['asfe']
}

// 모든 필드를 읽기 전용으로 만듦
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K] 
}

let c:ReadonlyAccount = {
  id:1234,
  isEmployee: true,
  notes: ['']
}

// 모든 필드를 다시 쓸 수 있도록 만듦(Account와 같음)
type Account2 = {
  -readonly [ K in keyof OptionalAccount]-?: Account[K]
}

let d: Account2 = {
  id:1234,
  isEmployee:false,
  notes:['asf']
}

// 모든 필드를 다시 필수형으로 만듬(Account와 같음)
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K]
}

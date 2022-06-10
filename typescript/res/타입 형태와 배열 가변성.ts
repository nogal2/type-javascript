// 서버로부터 받은 기존 사용자
type ExistingUser = {
    id: number
    name: string
  }
  
  // 아직 서버에 저장하지 않은 새 사용자
  type NewUser = {
    name:string
  }
  
  function deleteUser(user: {id?: number, name: string}) {
    delete user.id
  }
  
  let existingUser: ExistingUser = {
    id: 123456,
    name: 'Ima User'
  }
  
  deleteUser(existingUser)
  console.log(existingUser)
  
  type LegacyUser = {
    id?: number | string
    name: string
  }
  
  let legacyUser: LegacyUser = {
    id: '793331',
    name: 'Xin Yang'
  }
  
  deleteUser(legacyUser)
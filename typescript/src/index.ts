type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
type friendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'

function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k];
} 

type ActivityLog = {
  lastEvent: Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'White'
  }[]
}

let activityLog: ActivityLog  = { lastEvent: new Date(), events: [{id: 'asfe', timestamp: new Date(), type: 'Read'}]}
let lastEvent = get(activityLog, 'lastEvent');

type Get = {
  <O extends object, K1 extends keyof O> (o:O, k1:K1):O[K1]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3:K3): O[K1][K2][K3]
}

let get1:Get = (object: any, ...keys: string[]) => {
  let result = object
  keys.forEach(k => result = result[k])
  return result
}

get1(activityLog, 'events', 0, 'type');
get1(activityLog, 'bad');
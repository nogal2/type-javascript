type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay = {
  Mon:'Tue'
}
console.log(nextDay.Mon);

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
 
function getAPIResponse(): Promise<APIResponse> {
  // ...
}

function renderFriendList(friendList: FriendList){
  // ...
}

let response = await getAPIResponse();
renderFriendList(response.user.friendList);

type FriendList = APIResponse['user']['friendList']
type Friend = FriendList['friends'][number]
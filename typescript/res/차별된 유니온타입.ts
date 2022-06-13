type UserTextEvent = { type: 'TextEvent', value: string, target: HTMLInputElement }
type UserMouseEvent = { type: 'MouseEvent' ,value: [number, number], target: HTMLElement }

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
  if (event.type === 'TextEvent') {
    event.value   // string
    event.target  // HTMLInputElement
    // ...
    return;
  }
  event.value   // [number, number]
  event.target  // HTMLElemnet
}

class MessageQueue {
    private constructor(private messages: string[]) {}
    static create(messages: string[]){
      return new MessageQueue(messages)
    }
  }
type State = {
    [key: string]: string
  }
  
  class StringDatabase {
    constructor(public state: State = {}) {}
    get(key: string): string | null {
      return key in this.state ? this.state[key] : null
    }
    set(key:string, value:string): void {
      this.state[key] = value
    }
    static from(state: State) {
      let db = new StringDatabase
      for (let key in state) {
        db.set(key, state[key])
      }
      return db;
    }
  }
  
  let a = new StringDatabase;
  console.log(a)
  a.set('노승', '현')
  a.set('박희','용')
  console.log(a)
  StringDatabase.from(a.state);
  
  interface StringDatabase {
    state: State
    get(key:string): string | null
    set(key:string, value:string): void
  }
  
  interface StringDatabaseConstructor {
    new(state?: State): StringDatabase
    from(state: State): StringDatabase
  }
  
  

class Stack {
  constructor() {
    this.items ={};
    this.top = -1;
  }


  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
}

describe("Stack Tests", () => {
    let stack;
    
    beforeEach(() => {
        stack = new Stack();
    });

});
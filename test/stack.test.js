
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

    test("Push Operation", () => {
        stack.push(10);
        expect(stack.items[stack.top]).toBe(10);
        expect(stack.top).toBe(0);

        stack.push(20);
        expect(stack.items[stack.top]).toBe(20);
        expect(stack.top).toBe(1);
    });

});
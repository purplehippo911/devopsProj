
class Stack {
  constructor() {
    this.items ={};
    this.top = -1;
    
    this.peek = () => {
      return this.items[this.top];
    }
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

  test("is created empty", () => {
    
    expect(stack.items).toEqual({});
  });

  test("can push to the top", () => {
    stack.push("item67");
    expect(stack.top).toBe(0);
    expect(stack.peek()).toBe("item67");
  });

  test.todo("popping an item decreases the stack size")


});
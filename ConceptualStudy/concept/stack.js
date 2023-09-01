class Stack {
  arr = [];

  push(value) {
    this.arr.push(value);
  }

  pop() {
    this.arr.pop();
  }

  // getter
  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
console.log(stack.length);

class LinkedList {
  // length = 0;
  constructor(length) {
    this.length = length;
    this.head = null;
  } // constructor 사용하지 않으려면 위의 length = 0 을 사용하면 된다.

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        // next 가 없을때까지 돈다
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }
  search(index) {
    // arr = [1,2,3]
    // arr[3] // undefined

    return this.#search(index)[1]?.value;
  }
  #search(index) {
    let cnt = 0;
    let prev;
    let current = this.head;
    while (cnt < index) {
      prev = current;
      current = current?.next;
      cnt++;
    }
    return current?.value;
  }
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index 가 0 일 때
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // 삭제 하고자 하는 대상이 없을 대 아무것도 하지 않음

    // let cnt = 0;
    // let current = this.head;
    // while (current.next) {}
  }
}
class Node {
  next = null;
  constructor(value) {
    // 외부에서 받아야 하는 것은 constructor 사용해줘야 한다.
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
// console.log(ll.add(6));
console.log(ll.search(1)); // 2
console.log(ll.search(3)); // 4
console.log(ll.search(4)); // 5
// ll.search(5);
// ll.search(6);
// ll.search(7); // null

// ll.remove(4);
// ll.search(4); // null

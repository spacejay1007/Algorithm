function createLinkedList() {
  let head = null;
  let length = 0; // 전체 데이터를 올려준다.

  function add(value) {
    // 제공된 값으로 새 노드를 만들고 다음 참조는 없습니다.
    const newNode = { value, next: null };

    // 연결된 목록이 현재 비어 있는 경우(head가 null),
    // head를 새 노드에 설정합니다.
    if (!head) {
      head = newNode;
    } else {
      // 연결된 목록이 비어 있지 않으면 마지막 노드를 찾고
      // (null next reference를 가진 참조) 다음 참조를 업데이트
      // 새로운 노드를 가리키기 위해, head부터 시작하고 마지막 노드에 도달할 때까지 목록을 반복
      let current = head;
      // 다음게 없을 때까지 들어간다
      while (current.next) {
        // head.next 가 null 이면
        current = current.next;
      }
      // 이때 'current'가 목록의 마지막 노드
      // 새 노드를 가리키도록 '다음' 참조를 업데이트
      // 목록 끝에 새 노드를 효과적으로 추가
      current.next = newNode;
    }
    length++;
    return length;
  }

  function search(index) {
    let cnt = 0;
    let current = head;
    while (cnt < index && current) {
      current = current.next;
      cnt++;
    }
    return current ? current.value : undefined;
  }

  function remove(index) {
    if (index < 0 || index >= length) {
      return undefined;
    }
    if (index === 0) {
      head = head.next;
    } else {
      let prev = null;
      let current = head;
      let cnt = 0;
      while (cnt < index) {
        prev = current;
        current = current.next;
        cnt++;
      }
      prev.next = current.next;
    }
    length--;
    return length;
  }

  return {
    add,
    search,
    remove,
    get length() {
      return length;
    },
  };
}

const ll = createLinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
// ll.add(4);
// ll.add(5);
console.log(ll.search(1)); // Output: 2
// console.log(ll.search(3)); // Output: 4
// console.log(ll.search(4)); // Output: 5
console.log(ll.length);

// ll.remove(4);
// console.log(ll.search(4)); // Output: undefined (element removed)
// console.log(ll.length);

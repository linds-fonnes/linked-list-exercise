/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let secondToLastNode = this.head;
    while (currentNode.next) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }
    secondToLastNode.next = null;
    this.tail = secondToLastNode;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const nodeToRemove = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }
    return nodeToRemove.val;
  }

  /** gets the node, not node val */

  getNodeAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const currentNode = this.getNodeAt(idx);
    if (currentNode) {
      currentNode.val = val;
      return currentNode;
    } else return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length) {
      return this.push(val);
    } else {
      const position = this.getNodeAt(idx - 1);
      const newNode = new Node(val);
      newNode.next = position.next;
      position.next = newNode;
      this.length += 1;
      return newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      const beforeNodeToRemove = this.getNodeAt(idx - 1);
      const nodeToRemove = beforeNodeToRemove.next;
      beforeNodeToRemove.next = nodeToRemove.next;
      this.length -= 1;
      return nodeToRemove;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let curr = this.head;
    while (curr) {
      total += curr.val;
      curr = curr.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;

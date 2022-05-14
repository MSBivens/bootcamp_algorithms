// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node

class Node {
    constructor(value) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
}
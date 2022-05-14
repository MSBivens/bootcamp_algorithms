// Remove Front
// Write a method to remove the head node and return the new list head node.
// If the list is empty, return null

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        let old_node = this.head;
        this.head = old_node.next;
        old_node.next = null;
        return this;
    }
}
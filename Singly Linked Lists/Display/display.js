// Display
// Create a display() that returns a string containing all the list values.
// Build what you wish with console.log(myList) did.

class Node {
    constructor(val) {
        thgis.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head;
    }
    addFront(value) {
        var new_Node = new Node(value);
        new_Node.next = this.head;
        this.head = new_Node;
        return this.head
    }

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head
    }

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }

    display() {
        var listStr = "";
        if (this.head == null) {
            return "";
        }
        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null) {
            listStr += "| " + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}
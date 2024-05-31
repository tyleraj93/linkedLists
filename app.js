class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    size() {
        let counter = 0;
        let current = this.head;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        if (index >= this.size() || index < 0) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    contains(value) {
        let current = this.head;
        if (current.data === value) return true;
        while (current.next) {
            if (current.next.data === value) return true;
            current = current.next;
        }
        return false;
    }
}
 
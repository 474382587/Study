class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToHead(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addToTail(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let pointer = this.head;
            while (pointer.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
        this.size++;
    }

    removeFromTail() {
        let result = null;

        if (this.size === 0) {
            return result
        } else if (this.size === 1) {
            result = this.head.value;
        } else {
            let pointer = this.head;
            while (pointer.next.next !== null) {
                pointer = pointer.next;
            }
            result = pointer.next.value;
            pointer.next = null;
        }
        this.size--;
        return result;
    }

    removeFromHead() {
        let result = null;
        if (this.head !== null) {
            result = this.head.value;
            this.head = this.head.next;
            this.size--;
        }
        return result;
    }

    print() {
        let outputStr = 'Head: ';
        if (this.head === null) {
            console.log('This list is empty~~~');
        } else {
            let pointer = this.head;
            while (pointer !== null) {
                outputStr =
                    outputStr +
                    pointer.value +
                    (pointer.next === null ? ' --> Null' : ' --> ');
                pointer = pointer.next;
            }
        }
        console.log(!outputStr ? 'This list is empty' : outputStr);
    }
    find(value) {}
}

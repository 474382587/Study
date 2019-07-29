class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    }

    addToHead(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addToTail(value) {
        const node = new Node(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++;
    }

    removeFromTail() {
        let result = null;

        if (this.size === 0) {
            return result;
        } else if (this.size === 1) {
            result = this.head.value
            this.head = null
            this.tail = null
        } else {
            result = this.tail.value
            this.tail = this.tail.previous    
        }
        this.size--;
        return result;
    }

    removeFromHead() {
        let result = null;
        
        if (this.head !== null) {
            result = this.head.value;
            this.head = this.head.next;
            this.tail = this.head ? this.head.next === null ? this.head : this.tail : null
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

    size() {
        return this.size;
    }

    isEmpty() {
        return !!this.size;
    }

    find(value) {
        let result;
        let index = 0;
        let pointer = this.head;
        while (pointer !== null) {
            if (pointer.value === value) {
                result = index
                break;
            }
            pointer = pointer.next;
            index++
        }
        return result;
    }
}

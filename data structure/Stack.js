/**
 * Stack Class
 */

// Implement a stack

class Stack {
    constructor(array) {
        this.array = array
    }

    push(item) {
        this.array.push(item)
    }

    pop() {
        return this.array.splice(this.array.length - 1, 1)
    }
    
    peek() {
        return this.array[this.array.length - 1]
    }
    
    empty() {
        return this.array.length > 0
    }
    
    size() {
        return this.array.length
    }

    print() {
        console.log(this.array)
    }
}

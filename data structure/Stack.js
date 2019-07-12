/**
 * Stack Class
 */

// Implement a stack

class Stack {
    constructor(array) {
        this.array = array
    }

    add(item) {
        this.array.push(item)
    }

    pop() {
        return this.array.splice(this.array.length - 1, 1)
    }

    print() {
        console.log(this.array)
        
    }
}

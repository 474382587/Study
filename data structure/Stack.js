/**
 * Stack Class
 */

// Implement a stack

class Stack {
    constructor(array) {
        if (Object.prototype.toString.call(array) === '[object Array]') {
            this.array = array
        } else {
            throw new Error('Not Array')
        }
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

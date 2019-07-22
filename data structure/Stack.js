/**
 * Stack Class
 * @params take an array
 * @method push - push one item to the top
 * @method pop - pop one item from the top
 * @method peek - get one item from the top
 * @method empty - check if this stack is empty
 * @method size - get the size of this stack
 * @method print - console.log this stack
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
        return this.array.pop()
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

/**
 * Stack Class
 * @params take an array
 * @method push - push one item to the rear
 * @method pop - pop one item from the front
 * @method peek - get one item from the front
 * @method empty - check if this queue is empty
 * @method size - get the size of this queue
 */


class Queue {
    constructor(array) {
        if (Object.prototype.toString.call(array) === '[object Array]') {
            this.array = array
        } else {
            throw new Error('Not Array! Please modify your input.')
        }
    }

    enqueue(item) {
        this.array.push(item)
    }
    dequeue() {
        return this.array.splice(0, 1)
    }
    peek() {
        return this.array[0]
    }
    isEmpty() {
        return this.array.length < 1
    }
    getLength() {
        return this.array.length
    }
} 

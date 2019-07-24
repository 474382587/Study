class Deque {
    
    constructor() {
        this.array = []
    }
    
    addFront(item) {
        this.array.unshift(item)
    }
    
    removeFront() {
        return this.array.shift()
    }
    
    addBack(item) {
        this.array.push(item)
    }
    
    removeBack() {
        return this.array.pop()
    }
    
    peekFront() {
        return this.array[0]
    }
    
    peekBack() {
        return this.array[this.size() - 1]
    }
    
    size() {
        return this.array.length
    }
    
    isEmpty() {
        return this.size() < 1
    }
    
    clear() {
        this.array = []
    }
}

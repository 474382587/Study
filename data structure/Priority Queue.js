



class PriorityQueue {
    constructor() {
        this.array = []
    }

    enqueue(value, priority) {
        if (this.array.length === 0) {
            this.array.push({
                value,
                priority
            })
        } else {
            for (let i = this.array.length - 1; i > -1; i--) {
                if (priority >= this.array[i].priority) {
                    if (i === 0) {
                        this.array.unshift({ value, priority })
                    }
                    else {
                        continue
                    }
                } else {
                    this.array.splice(i + 1, 0, { value, priority })
                    break
                }

            }
        }
    }

    dequeue() {
        return this.array.pop()
    }

    peek() {
        return this.array[this.size() - 1]
    }

    size() {
        return this.array.length
    }

    isEmpty() {
        return this.array.length < 1
    }
}

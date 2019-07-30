class Set {
    constructor() {
        this.items = {}
        this.size = 0
    }

    add(value) {
        if (this.has(value)) {
            return false
        } else {
            this.items[value] = value
        }
        this.size++
        return true
    }

    delete(value) {
        if (this.has(value)) {
            delete this.items.value
            this.size--
            return true
        } else {
            return false
        }
    }

    has(value) {
        return value in this.items
    }

}

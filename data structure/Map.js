class Map {

    constructor() {
        this.map = {}
        this.size = 0
    }

    set(key, value) {
        if (this.map.hasOwnProperty(key)) {
            console.log('already have this key')
        } else {
            console.log('added this key')
            this.size++
        }
        this.map[key] = value
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            console.log('deleted this key')
            this.size--
        } else {
            console.log('key does not exist')
        }
        delete this.map[key]
    }

    get(key) {
        return this.map[key]
    }

    clear() {
        this.map = {}
        this.size = 0
    }

    size() {
        return this.size
    }

    isEmpty() {
        return this.size < 1
    }
    
    keys() {
        return Object.keys(this.map)
    }
    
    values() {
        return Object.values(this.map)
    }
    
    hasKey(key) {
        return this.map.hasOwnProperty(key)
    }
}

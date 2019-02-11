module.exports = {
    add: function(a, b) {
        return a + b
    },
    square: function(num) {
        return num * num
    },
    setName: function(name) {
        return {
            name
        }
    },
    asyncAdd: function(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 10)
    }
}

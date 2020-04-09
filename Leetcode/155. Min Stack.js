/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = null
    this.stack = []
    this.hash = {}
    this.length = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    this.min = this.min === null ? x : Math.min(this.min, x)
    // console.log(this.min, ' == ')
    this.hash[(this.stack.length - 1) + ''] = this.min
    // console.log(this.hash)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length < 1) {
        this.min = null
        return null
    }
    
    var res = this.stack.pop()
    this.min = this.hash[(this.stack.length - 1) + ''] || null
    
    return res
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
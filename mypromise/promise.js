function MyPromise(executor) {
    var that = this
    that.state = 'pending'
    that.value = ''
    that.reason = ''

    that.successCallback = []
    that.failCallback = []

    executor(resolve, reject)
    function reject(err) {
        if (that.state === 'pending') {
            that.reason = err
            that.state = 'reject'
            that.successCallback.forEach(e => {
                e()
            })
        }
    }
    function resolve(res) {
        if (that.state === 'pending') {
            that.value = res
            that.state = 'resolve'
            that.successCallback.forEach(e => {
                e()
            })
        }
    }
}

MyPromise.prototype.then = function(success, fail) {
    if (this.state === 'pending') {
        this.successCallback.push(() => {
            success(this.value)
        })
        this.failCallback.push(() => {
            fail(this.reason)
        })
    } else if (this.state === 'resolve') {
        success(this.value)
    } else if (this.state === 'reject') {
        fail(this.reason)
    }
}

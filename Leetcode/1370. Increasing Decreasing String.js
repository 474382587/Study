/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    s = s.split('').sort()
    var arr = []
    var pre = ''
    for(var i = 0; i < s.length; i++) {
        if(s[i] !== pre) {
            pre = s[i]
            console.log(pre)
            arr.push([s[i]])
        } else {
            arr[arr.length - 1].push(s[i])
        }
    }
    console.log(arr)
    var result = ''
    let count = s.length
    while(count > 0) {
        for(var i = 0; i < arr.length; i++) {
            if(count < 0) break
            if(arr[i].length > 0) {
                result += arr[i].pop()
                count--
            }
        }
        for(var j = arr.length - 1; j > -1; j--) {
            if(count < 0) break
            // console.log(j)
            if(arr[j].length > 0) {
                result += arr[j].pop()
                count--
            }
        }
    }
    // console.log(result)
    return result
};
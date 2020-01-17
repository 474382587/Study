/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    var sum = 0
    var num = []
    var points = 0
    
    for(var i = 0; i < ops.length; i++) {
        // console.log(sum)
        switch(ops[i]) {
            case 'C': 
                sum = sum - num.pop()
                break
            case 'D':
                points = num[num.length - 1] * 2
                sum = sum + points
                num.push(points)
                break
            case '+':
                points = (num.length - 1) > 0 ? num[num.length - 1] + num[num.length - 2] : num.length > 0 ? num[0] : 0
                sum += points
                num.push(points)
                break
            default:
                sum += (ops[i] - 0)
                num.push((ops[i] - 0))
        }
        
    }
    
    return sum
    
};


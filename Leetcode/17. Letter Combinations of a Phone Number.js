/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    var arr = digits.split('')
    var result = []
    for(var i = 0; i < arr.length; i++) {
        
        var digit = arr[i]
        
        if(result.length === 0) {
            result = result.concat(map[digit])
            continue
        }
        var temp = []
        for(var j = 0; j < result.length; j++) {
            
            for(var k = 0; k < map[digit].length; k++) {
                var str = result[j] + map[digit][k]
                temp.push(str)
            }            
        }
        result = temp
    }
    // console.log(result)
    return result
};

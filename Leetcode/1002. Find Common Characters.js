/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    
    var arr = A.sort((a, b) => {
        return a.length - b.length 
    })
    
    var hashArr = []
    
    for(var i = 0; i < A.length; i++) {
        var hash = {}
        for(var j = 0; j < A[i].length; j++) {
            
            if(hash[A[i][j]] === undefined) {
                hash[A[i][j]] = 1
            } else {
                hash[A[i][j]]++
            }            
        }
        hashArr.push(hash)
    }
    
    var result = []
    var arr2 = arr[0].split("")
    for(var j = 0; j < arr2.length; j++) {
        var char = arr2[j]
        var save = true
        for(var i = 1; i < hashArr.length; i++) {
            if(hashArr[i][char] === undefined || hashArr[i][char] < 1) {
                save = false 
                break
            }
        }
        if(save) {
            for(var i = 0; i < hashArr.length; i++) {
                hashArr[i][char]--
            }
            result.push(char)
        }
    }
    // console.log(result)
    // console.log(hashArr)
    return result
};
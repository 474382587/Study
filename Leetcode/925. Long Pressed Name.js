/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(name === typed) return true
    if(name.length >= typed.length) return false
    var hash1 = {
        length: 0
    }
    
    var index
    for(var i = 0; i < name.length; i++) {
        if(!hash1[name[i]]) {
            hash1[name[i]] = true
            hash1.length++
        }
        var char = name[i]
        var currentIndex
        
        if(index) {
            currentIndex = typed.indexOf(char, index + 1) === -1 ? false : typed.indexOf(char, index + 1)            
            
        } else {
            currentIndex = typed.indexOf(char, 0) === -1 ? false : typed.indexOf(char, 0)
            // index = currentIndex
        }
        
        index = currentIndex
        // Return false if this character is not in the typed value        
        if(currentIndex === false) return false 
    }
    

    var hash2 = {
        length: 0
    }
    for(var i = 0; i < typed.length; i++) {
        if(!hash2[typed[i]]) {
            hash2[typed[i]] = true
            hash2.length++
        }
    }
    // console.log(hash1)
    // console.log(hash2)
    if(Object.keys(hash1).length !== Object.keys(hash2).length) return false
    for(var key in hash2) {
        if((key !== 'length') && (hash1[key] !== true)) return false
    }
    
    
    return true
    
};
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var hash = {
        vertical: 0,
        horizontal: 0
    }
    
    for(var i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            case 'U': 
                hash.vertical++
                break
            case 'D':
                hash.vertical--
                break
            case 'L':
                hash.horizontal++
                break
            case 'R':
                hash.horizontal--
                break
            default:
        }
    }
    console.log(hash)
    return hash.horizontal === 0 && hash.vertical === 0
};
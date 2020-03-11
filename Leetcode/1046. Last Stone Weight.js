/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones.sort((a, b) => b - a)
        let stone = stones[0] - stones[1]
        if(stone === 0) {
            stones.splice(0, 2)
            continue
        }
        stones.splice(0, 2, stone)
    } 
    return stones.length > 0 ? stones[0] : 0
};
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function(flowerbed, n) {
//     let count = 1, sum = 0;
//     for(val of flowerbed){
//         if(val==1){
//             if(count>1) sum += Math.floor((count-1)/2);
//             count = 0;
//         }else{
//             count++;
//         }
//     }
//     if(count>1) sum += Math.floor(count/2);
//     return sum>=n
// };
var canPlaceFlowers = function(flowerbed, n) {

    for(var i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0
};
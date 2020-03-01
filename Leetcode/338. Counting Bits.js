/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        var str = i.toString(2).replace(/0/g, '');
        arr.push(str.length);
    }
    return arr;
};

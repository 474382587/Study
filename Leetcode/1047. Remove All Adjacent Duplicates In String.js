/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let arr = S.split('');
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            arr.splice(i - 1, 2);
            i = 0;
        }
    }
    return arr.join('');
};

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var localNames = emails.map(e => {
        return (e.split('@')[0].split('+')[0].replace(/\./g, '') + '@' + e.split('@')[e.split('@').length - 1])
    })
    // console.log(localNames)
    var hash = {}
    var result = []  
    for(var i = 0; i < localNames.length; i++) {
        if(hash[localNames[i]] === undefined) {
            hash[localNames[i]] = true
            result.push(localNames[i])
        } else {
            continue
        }
    }
    // console.log(result)
    return result.length
};

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(domains) {
    var hash = {}
    
    for(var i = 0; i < domains.length; i++) {
        var split = domains[i].split(" ")
        var count = split[0]
        var domain = split[1]

        var regex = /\w+./
        while(domain !== domain.replace(regex, '')) {
            if(hash[domain] === undefined) {
                hash[domain] = count - 0
            } else {
                hash[domain] += count - 0
            }
            domain = domain.replace(regex, '')
        }
    }
    var result = []
    for(var key in hash) {
        result.push(`${hash[key]} ${key}`)
    }
    // console.log(result)
    return result
};

function combine() {
    const args = Array.from(arguments)
    if (args.length < 1) return false
    if (!args.every(arg => Array.isArray(arg))) return false

    let result = {}
    for (let i = 0; i < args[0].length; i++) {
        result[args[0][i]] = result[args[0][i]] || args[0][i] + ''
    }
    
    for (let i = 1; i < args.length; i++) {
        const currentArg = args[i]
        var hash = {}
        for (let key in result) {
            for (let j = 0; j < args[i].length; j++) {
                const newVal = result[key] + currentArg[j]
                hash[newVal] = hash[newVal] || newVal
            }
        }
        result = hash
    }

    const arr = []
    for(let key in result) {
        arr.push(result[key])
    }
    return arr
}
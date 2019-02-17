interface Config {
    (val: number):string
}

function numberToString() {
    
}

var a:Config = function(hello){
    return hello + ''
}

interface c {
    say(hi:string):string
}

class d implements c {
    constructor() {
        
    }
    say(hi:string) {
        return hi
    }
}
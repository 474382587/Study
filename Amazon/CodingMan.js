/**
 * Requirements
 * CodingMan('Peter').sleep(3).eat('dinner')
    
    - Output:
    - Hi! This is Peter!
    - // Wait for 3 seconds
    - Wakeup after 3 seconds
    - Eat dinner~
 */


// low B version
function CodingMan(name) {
    console.log(`Hi! This is ${name}!`)
    return {
        sleep: function(time) {
            return {
                eat: function(food) {
                    setTimeout(() => {
                        console.log(`Wake up after ${time}`)
                        console.log(`Eat ${food}~`)
                    }, time * 1000);
                }
            }
        }
    }
}


class CodingMan {
    
    constructor(name) {
        this.fullfilled = null
        this.name = name
        this.callbacks = []
    }
    
    eat(food) {
        if(this.fullfilled === true) {
            console.log(`Eat ${food}~`)
        } else {
            this.callbacks.push((function() {
                console.log(`Eat ${food}~`)
                this.fullfilled 
            }).bind(this))
        }
    }
    
    sleep(time) {
        if(this.fullfilled === true) {
            console.log(`Eat ${food}~`)
        } else {
            this.callbacks.push((function() {
                console.log(`Eat ${food}~`)
            }).bind(this))
        }
    }
}




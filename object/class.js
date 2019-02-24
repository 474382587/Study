class userCreator {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('Hello!');
    }
}
class paidUserCreator extends userCreator {
    constructor(name, balance) {
        super(name);
        this.balance = balance;
    }
    getBalance() {
        console.log(this.balance);
    }
}

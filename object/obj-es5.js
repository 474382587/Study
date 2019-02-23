function userCreator(name) {
    var newUser = Object.create(userFunctions);
    newUser.name = name;
    return newUser;
}

var userFunctions = {
    sayHello: function() {
        console.log('Hello');
    }
};

function paidUserCreator(name, balance) {
    var newPaidUser = userCreator(name);
    newPaidUser.balance = balance;
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    return newPaidUser;
}

var paidUserFunctions = {
    getBalance: function() {
        console.log(this.balance);
    }
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

function userCreator2(name) {
    this.name = name;
}

userCreator2.prototype.sayHello = function() {
    console.log('Hello');
};

function paidUserCreator(name, balance) {
    userCreator2.call(this, name);
    this.balance = balance;
}
paidUserCreator.prototype = Object.create(userCreator2.prototype);
paidUserCreator.prototype.getBalance = function() {
    console.log(this.balance);
};

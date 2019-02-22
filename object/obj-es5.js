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

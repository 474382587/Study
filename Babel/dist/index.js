"use strict";

var sayHi = function sayHi() {
  console.log('Babel');
};

var num = 3;
var str = "I am ".concat(num, " years old");
var arr1 = [1, 3, 2];
var arr2 = [1].concat(arr1);

sayHi();
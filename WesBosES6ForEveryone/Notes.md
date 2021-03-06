1. ES6 switch values => syntax: [a,b] = [b,a];

2. Default Function Argument
        function calculateBill(total, tax, tip){
            return total + (total * tax) + (total * tip);
        }
    Old:
        if(tax === undefined){
            tax = 0.13;
        }
        if(tip === undefined){
            tip = 0.15;
        }
    ES6:
        Add things in declaration 
        such that:
        function calculateBill(total, tax = 0.13,tip = 0.15){
            ...
        };
        calculateBill(100, undefined, 0.1);

3. When not to use an arrow function
    1. When you really need "this"
    2. When you need a method to bind an object
    3. When you need to add a prototype method
    4. When you need arguments object

4. template strings 
    1. Multi-line strings
    2. Expression interpolation
    3. Nesting templates
    4. Tagged templates
    Interesting stuff: DOMPurify.sanitize();

    syntax: 
        1)  "Bob loves playing " + sport  " with June." 
            ==> 
            `Bob loves playing ${sport} with June.`

        2)  "Hello there\
            I am here\
            How are you"
            =>
            `Hello there
            I am here
            How are you`
    Examples:
        1. const name = `
        <div class="name">
            <h2>
                John
            </h2>
        </div>
        `;
        2. 
        const classes = `header ${ isLargeScreen() ? '' :
        `icon-${(item.isCollapsed ? 'expander' : 'collapser')}` }`; //note the parens
        3. 
            const dogs = [
            {name: "Sun", age:8},
            {name: "John", age:2},
            {name:"Bob", age: 3 }
            ];        
            const markup = `<ul class = "dogs">
                ${dogs.map(dogs => `<li>${dogs.name} is ${dogs.age}s old.</li>`)}
        </ul>`;
        4.  var markup4 = `${song.name} is a song 
            written by ${song.artist} ${song.feature ? `${song.feature}`:``}`
        5.  var person = 'Mike';
            var age = 28;

            function myTag(strings, personExp, ageExp) {

            var str0 = strings[0]; // "that "
            var str1 = strings[1]; // " is a "

            // There is technically a string after
            // the final expression (in our example),
            // but it is empty (""), so disregard.
            // var str2 = strings[2];

            var ageStr;
            if (ageExp > 99){
                ageStr = 'centenarian';
            } else {
                ageStr = 'youngster';
            }

            return str0 + personExp + str1 + ageStr;

            }

            var output = myTag`that ${ person } is a ${ age }`;

            console.log(output);
            // that Mike is a youngster
 
        6.//Tagged
            const first = 'Joseph';
            const last = 'Jin';
            var dict = {
                html : 'Hyper Text Markup',
                css : 'Cascading Style Sheets',
                js : 'JavaScript'
            }
            const sentence = addAbbreviation`Hello my name is ${first} ${last}, and I love
            to code ${"html"}, ${"css"} and ${"js"}`;
            
            function addAbbreviation(strings, ...values){
                const abbreviated = values.map(value => {
                    if(dict[value]){
                        return `<abbr title ="${dict[value]}">${value}</abbr>`;
                    }
                    return value;
                });
                return strings.reduce((sentence,string,i) => {
                    return `${sentence}${string}${abbreviated[i]||""}`;
                });
            }

################################################################################################################################################################################################

 -- 02.16 --
 New String Method

//.startsWith()
string.startsWith()
1. Case sensative
2. .startsWith("",3) starts after 3 characters

//endsWith()
string.endsWith()
 
//.includes()

//.repeat()
repeat a string n times


Distructuring Object
1. 
var person = {
    name: "Joseph",
    age: 24,
    gender: "male"
};

const {name,age,gender} = person;

2.
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

3. nested 

const wes = {
    first:"wes",
    last:"bos",
    links:{
        social:{
            twitter:"t",
            facebook:"f"
        }
    }
}

var {facebook, twitter} = wes.links.social;
//You are able to rename it this way while destructuring
var {facebook: FB, twitter: TW} = wes.links.social;

4. default values

    const settings = {
        height: 100;
        width: 200;
        length: 100;
    }

    if novalue take default value roll back to default
    const {height=101, width, length, color = "red"} = settings;
Practice:

// Object destructuring with variable renaming and default values
const {w:width = 400 , h:height = 500} = {w:800}     


Distructuring Array

Basic:

1. 
const details = ['Joseph Jin', 24, 'jerkjoe'];
const [name, age, username] = details;
console.log(name, age, username);

2.
const details = 'Joseph Jin,24,jerkjoe';
const [name, age, username] = details.split(',');

3. 
what if array is larger than Distructuring?
1) you do not need it --> dont care
2) you want them all
    var team =['Pop','Pau','Kobe','James','Jordan'];
    user ... (rest operator)
    var [coach, assistant, ...players] = team;

Swapping variables with destructuring

var a =3;
var b =9;
//Swapping
[a,b] = [b,a];



for...of...
//for..in.. gives us index
Syntax:
for(const/var/let iterableElement of iterableArray){...}

1.
var arr  = [["a","b"],["c","d"],["e","f"],["g","h"]];

for([first,last] of arr){
    console.log(`${first} and ${last}`);
}

2. 
function addNumbers(){
    //console.log(arguments); //not an array arguments
    let total = 0;
    for(num of arguments){
        total += num;
    }

}

addNumbers(10,1,2,4,5,4,22,447,724);

for...in... loop
Syntax:
for(const index in iterable ){
    console.log(iterable[index]);
}

** for..in.. with Objects **

var person = {
    name:"Joseph",
    age: 24,
    gender: "male"
}

for(const prop in person){

    console.log(person[prop]);

}



Array.from()
Syntax: Array.from(array like)
turning array like in to array

const people = document.querySelectorAll('.people p');
const peopleArray = Array.from(people);


// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]


array.find()

Find an object in an array by one of its properties
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries)); 
// { name: 'cherries', quantity: 5 }

Find a prime number in an array
The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number).

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5


array.findIdex() //arr.findIndex(callback[, thisArg])
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3


Array.some()

at least one adult
var group = [18,18,17,20];
group.some(people => people>=19);

All old enough to drink?
group.every(person => person>18);



Spread Operator
iterable means anyhing that you can loop over with our "for of" loop
MDN


...rest parameter in Fucntions and destructuring

function bind(statement,...member){

		return member.map(person => {
			return person + statement;
		});

}
var a = bind(" is a part of Joseph's family! ","Joseph","Queen","Yifa").join("");

const runner =["Joseph Jin", 75998, 4,5,8,12,17];
const[name,id,runs] = runner; // take only one runner
const[name,id,...runs] = runner; // take the rest of parameters


Object Literals
If propery names are the same as variables
you dont need to add an value
var name = "pengpeng"
var dog ={

	name,
	age:3,
	gender:"male",
    //shorthand of function
    create(){
    
    },
    delete(){
    
    }
};

promise

// nav-menu-item-3769

var aboutBtn = document.querySelector('#nav-menu-item-3769>a');

if (aboutBtn) {
    aboutBtn.href = '/aboutus';
}

window.onload = function(event) {
    var leftHeight = document.getElementById('leftcol').offsetHeight + 60;
    var rightImage = document.querySelector('#right img');
    rightImage.style.height = leftHeight + 'px';
};

window.addEventListener('resize', function(event) {
    setTimeout(() => {
        var leftHeight = document.getElementById('leftcol').offsetHeight + 60;
        var rightImage = document.querySelector('#right img');
        rightImage.style.height = leftHeight + 'px';
    }, 100);
});

// form
var cancel = document.querySelector('.cancel');
cancel.addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var age = document.getElementById('age');
    var age = document.getElementById('phone');
    name.value = '';
    email.value = '';
    gender.value = '';
    age.value = '';
    phone.value = '';
});

let obj = {};
ar.forEach(el => {
    if (obj[el]) {
        obj[el]++;
    } else {
        obj[el] = 1;
    }
});
let result = 0;
for (key in obj) {
    result += Math.floor(obj[key] / 2);
}
return result;

var s = '';

let arr = s.split('');
let count = 0;
let start = 0;
let enterValley = false;
arr = arr.map(e => {
    return e === 'U' ? 1 : -1;
});
arr.forEach(e => {
    start += e;
    if (start >= 0 && enterValley) {
        count++;
    }
    enterValley = start < 0 ? true : false;
});

let c = [];

let begin = 0;
let steps = 0;
while (begin !== c.length - 1) {
    if (c[begin + 2] !== 1) {
        begin += 2;
        steps++;
        continue;
    } else {
        begin++;
        steps++;
    }
    return steps;
}

function repeatedString(s, n) {
    let length = s.length;

    let repeatedTimes = Math.floor(n / length);

    let remain = n % length;

    let substr = s.substr(0, remain);

    let numberOfA =
        s.split('').filter(e => e === 'a').length * repeatedTimes +
        substr.split('').filter(e => e === 'a').length;

    return numberOfA;
}

function hourglassSum(arr) {
    let sums = [];
    for (let i = 1; i < arr.length - 2; i++) {
        for (let j = 1; j < arr.length - 2; j++) {
            sums.push(
                arr[i - 1][j - 1] +
                    arr[i - 1][j + 1] +
                    arr[i - 1][j] +
                    arr[i][j] +
                    arr[i + 1][j] +
                    arr[i + 1][j + 1] +
                    arr[i + 1][j - 1]
            );
        }
    }
    console.log(Math.max.apply(null, sums));
    return Math.max.apply(null, sums);
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let length = a.length;
    let equalPerformance = d % length;

    let left = a.splice(equalPerformance);
    left = left.concat(a).join(' ');

    return left;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let sortedArr = arr.sort()
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === sortedArr[i]) {
            
        } else {
            // let temp = arr[i]
            arr[arr.indexOf(sortedArr[i])] = arr[i]
            arr[i] = sortedArr[i]
            console.log(arr)
            count++
        }
    }
    return count
}

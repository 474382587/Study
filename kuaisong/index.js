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
var cancel = document.querySelector('.cancel')
cancel.addEventListener('click', function(event) {
    event.preventDefault()
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

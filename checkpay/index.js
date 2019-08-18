var submitBtn = document.getElementById('submit-button');
var number_of_verification = document.querySelector('#number-of-verification');
var allInputs = document.querySelectorAll('.input-wrapper>input');
var contentWrapper = document.querySelector('.content-wrapper');
var imageWrapper = document.querySelector('.image-wrapper');
var certificateImage = document.querySelector('.image-wrapper > img');

allInputs = Array.prototype.slice.call(allInputs);

allInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        document.querySelector('.help-message').style.display = 'none';
    });
});

submitBtn.addEventListener('click', function() {
    var certificate_number = document.getElementById('certificate_number')
        .value;
    var number_of_shares = document.getElementById('number_of_shares').value;
    var owner_name = document.getElementById('owner_name').value;
    var errorMsg = document.querySelector('.help-message');

    errorMsg.style.display = 'none';
    if (certificate_number && number_of_shares && owner_name) {
        console.log('none empty string found');
        axios({
            method: 'post',
            url:
                'https://shares.checkpay.ca/check',
            data: {
                number: certificate_number,
                shares: number_of_shares,
                owner: owner_name
            },
            headers: {
                
            }
        }).then(res => {
            console.log(res);
            if (res.data && res.data.valid) {
                number_of_verification.innerText = res.data.counter;
                contentWrapper.style.display = 'block';

                imageWrapper.style.display = 'block';
                certificateImage.setAttribute(
                    'src',
                    'https://shares.checkpay.ca/certificates/' + res.data.number
                );
            } else {
                contentWrapper.style.display = 'none';
                document.querySelector('.help-message').style.display = 'block';
                document.querySelector('.help-message').innerText =
                    "Error: Can't find corresponding verification this certificate.";
            }
        });
    } else {
        errorMsg.style.display = 'block';
    }
});

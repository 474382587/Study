var submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', function() {
    var certificate_number = document.getElementById('certificate_number')
        .value;
    var number_of_shares = document.getElementById('number_of_shares').value;
    var owner_name = document.getElementById('owner_name').value;
    var errorMsg = document.querySelector('.help-message');
    errorMsg.style.display = 'none';
    if (certificate_number && number_of_shares && owner_name) {
        console.log('none empty string found');
        // axios({
        //     method: 'post',
        //     url: 'https://cors-anywhere.herokuapp.com/https://shares.checkpay.ca/check',
        //     data: {
        //         number: certificate_number,
        //         shares: number_of_shares,
        //         owner: owner_name
        //     }
        // }).then(res => {
        //     console.log(res);
            
        // });
        let certificate_url = 'https://cors-anywhere.herokuapp.com/https://shares.checkpay.ca/certificates/1234567890'
        axios
            .get(certificate_url)
            .then(function(res) {
                console.log(res);
            });
    } else {
        errorMsg.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const options = Array.from(document.querySelectorAll('.option'))
    const amountDisplays = Array.from(document.querySelectorAll('.amount'))
    const input = document.querySelector('input')
    let displayValue = 60.00
    
    input.addEventListener('input', e => {
        const value = e.target.value
        if(isNaN(+value)) {
            console.log(
                'NaN'
            )
        } else {
            displayValue = (+value).toFixed(2)
            updateValue(amountDisplays, displayValue)
        }
    })
    
    options.forEach(option => {
        option.addEventListener('click', e => {
            const value = e.target.dataset.amount
            displayValue = value
            options.forEach(a => a.classList.remove('active'))
            e.target.classList.add('active')
            updateValue(amountDisplays, displayValue)
            input.value = displayValue + '.00'
        })
        option.addEventListener('mouseenter', e => {
            const value = e.currentTarget.dataset.amount
            updateValue(amountDisplays, value)
        })
        option.addEventListener('mouseleave', e => {
            updateValue(amountDisplays, displayValue)
        })
    })
    
    
    document.querySelector('.one-time').addEventListener('click', e => {
        const url = `/UGM/payment.html?amount=${displayValue}`
        window.location.href = url
    })
    document.querySelector('.monthly').addEventListener('click', e => {
        const url = `/UGM/payment.html?amount=${displayValue}&monthly=true`
        window.location.href = url
    })
    
})

function updateValue(elements, value) {
    elements.forEach(display => {
        display.innerText = value
    })
}
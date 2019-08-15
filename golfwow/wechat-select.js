
var allLabels = Array.prototype.slice.call(document.querySelectorAll("#wechatAliForm label.wdform-label"))

var dataJSON = allLabels.map(label => {
    console.log(label.htmlFor)
    // if(label.htmlFor) {
    //     console.log(document.querySelector('#' + label.htmlFor).value)
    // }
    return {
        label: label.innerText,
        value: label.htmlFor ? document.querySelector('#' + label.htmlFor) ? document.querySelector('#' + label.htmlFor).value : '' : ''
    }
})


var name = document.querySelector("input[data-name='name']") ? document.querySelector("input[data-name='name']").value : ''

var allNeededValues = Array.prototype.slice.call(document.querySelectorAll("input[data-name='name']"))
var contentArray = allNeededValues.map(field => {
    return field.value || ''
})



var totalPayment = document.querySelector('#wechatAliForm div[type="type_paypal_total"]>div>div>input').value

var paymentDetail = document.querySelector('#wechatAliForm div[type="type_paypal_total"]>div>div>div>div').innerText

var currentDate = (new Date()).toString()

var summary_for_payment = '-- 姓名：' + name + ' ++++++++++++ -- 金额：' + totalPayment + ' ++++++++++++ -- 日期：' + currentDate + ' ++++++++++++ -- 详情：' + paymentDetail


// New requirement: all data-name inputs value needs to be captured

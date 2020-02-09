/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    var year = date.split('-')[0] - 0
    var month = date.split('-')[1] - 0 
    var day = date.split('-')[2] - 0
    
    var days = day
    
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 
    
    if(month > 2) {
        if((year % 400) === 0) {
            days += 1
        } else if((year % 100) === 0) {
            days += 0
        } else if((year % 4) === 0) {
            days += 1
        }
    }

    if(month === 1) {
        return days
    }
    if(month === 2) {
        return days + 31
    }
    return daysInMonths.slice(0, month - 1).reduce((acc, cur) => {
        return acc + cur
    }, days)  
};

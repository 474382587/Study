/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    
    let container = {}
  intervals.sort((a, b) => a[0] - b[0])

  console.log(intervals)
  let i = 0
  let result = true
  while (i < intervals.length - 1) {
    if (intervals[0][1] <= intervals[i + 1][0]) {
      intervals[0][1] = intervals[i + 1][1]
      i++
    } else {
      result = false
      break
    }
  }
  return result
};
    
    /**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {

    let container = {}
    intervals.sort((a, b) => a[0] - b[0])
  
    // let rooms = []
    
    for(let i = 0; i < intervals.length; i++) {
      console.log('I am here!111')
      if(intervals[i].length === 0) {
        console.log('I am here2!')
        continue
      } else {
        for(let j = i + 1; j < intervals.length; j++) {
          console.log('I am here!', j)
          if(intervals[i][1] <= intervals[j][0]) {
            intervals[i][1] = intervals[j][1]
            intervals[j] = []
          }
        }
      }
    }
    console.log(intervals)
    let count = 0
    intervals.forEach(e => {
      if(e.length !== 0) {
        count++
      }
    })
    
  
    return count
  };
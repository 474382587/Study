import React, { Component } from 'react'
// import ReactDOM from 'react-dom'


class Calendar extends Component {

    constructor() {
        super()
        this.state = {
            elementArray: []
        }
    }

    componentDidMount() {
        console.log('getCurrentDate')

        const { year, month, date } = this.getCurrentDate()

        const elementArray = this.createDateElements(year, month, date)
        this.setState({
            elementArray: this.createDateElements(year, month, date)
        })
        console.log(elementArray)
    }

    getCurrentDate() {
        const date = new Date()
        console.log("year: ", date.getFullYear())
        console.log("month: ", date.getMonth())
        console.log("date: ", date.getDate())
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            day: date.getDay(),
            // totalDaysInTheMonth: this.getTotalDaysInOneMonth(date.getFullYear(), date.getMonth())
        }
    }

    getTotalDaysInOneMonth(year, month) {
        return new Date(year, month + 1, 0).getDate()
    }
    getDayFromDate(year, month) {
        return new Date(year, month, 1).getDay()
    }

    createDateElements(year, month, date) {
        const totalDaysInOneMonth = this.getTotalDaysInOneMonth(year, month)
        const blankDays = (this.getDayFromDate(year, month, date)) % 7

        let elementArray = []

        console.log(totalDaysInOneMonth)
        for (let i = 0; i < (totalDaysInOneMonth + blankDays); i++) {
            if (i < blankDays) {
                elementArray.push({
                    blank: true
                })
            } else {
                if (i === date) {
                    elementArray.push({
                        today: true,
                        value: i + 1 - blankDays
                    })
                } else {
                    elementArray.push({
                        value: i + 1 - blankDays
                    })
                }

            }
        }

        return elementArray
    }


    render() {
        return (<div>
            This is Calendar
            <div className="calendar-wrapper">
                {
                    this.state.elementArray.map((el, index) => {
                        return (
                            <div key={index}>
                                {
                                    el.value ? el.today ? <span className="today" style={{color: "red"}}>{el.value}</span> : <span>{el.value}</span> : ''
                                }
                            </div>
                        )
                    })
                }
            </div>


        </div>)
    }
}

export default Calendar

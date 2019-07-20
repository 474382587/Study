import React, { Component } from 'react'

class CustomSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false,
            input: ''
        }
    }
    componentDidMount() {
        // This allows dropdown to be folded if not been clicked on
        document.body.addEventListener('click', event => {
            if (event.target.querySelector("#select")) {
                this.setState({
                    showDropdown: false
                })
            }
        }, false)
    }
    handleSelectClick = (event) => {
        const target = event.target
        // conditionally display dropdown
        if (target.nodeName === 'INPUT' && this.state.showDropdown) {
        } else {
            this.setState(state => {
                return {
                    showDropdown: !state.showDropdown
                }
            })
        }
    }
    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    handleSelectItemClick = (event) => {
        // get id and update state(show flag and input value)
        let id = event.target.value - 0
        this.setState((state, props) => {
            return {
                showDropdown: false,
                input: props.accounts.find(item => item.id === id).name
            }
        })
        // then call the method pasing from parent to update parent state
        this.props.onChange(event.target.value)
    }
    render() {
        return (
            <div id="select">
                <div className="select-wrapper" onClick={this.handleSelectClick}>
                    <input value={this.state.input} onChange={this.handleInputChange} placeholder="Please enter name here..."></input>
                    <span className="arrow">
                        <svg className={this.state.showDropdown ? 'down' : ''} viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                    </span>
                </div>
                {
                    this.state.showDropdown ? (
                        <ul className="dropdown-list">
                            {
                                this.props.accounts.filter(account => {
                                    return account.name.includes(this.state.input)
                                }).length > 0 ? this.props.accounts.filter(account => {
                                    return account.name.includes(this.state.input)
                                }).map(account => {
                                    return (<li onClick={this.handleSelectItemClick} key={account.id} value={account.id}>{account.name}</li>)
                                }) : <li>No Results</li>
                            }
                        </ul>
                    ) : ''
                }
            </div>

        )
    }
}

export default CustomSelect 

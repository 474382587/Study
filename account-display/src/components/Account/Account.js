import React, { Component } from 'react'
import axios from 'axios' // Request library
import { Spin, Divider, Card } from 'antd'
import { Link } from "react-router-dom";


// UI Components
import { Select } from 'antd';
const { Option } = Select;

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accountsArray: [],
            selectedAccount: '',
            loading: true
        }
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val) => {
        console.log('search:', val);
    }

    componentDidMount() {
        axios.get('/accounts').then((res) => {
            const accounts = res.data
            this.setState({
                loading: false,
                accountsArray: accounts
            })
        }).catch(err => {
            console.log('err', err)
            this.openNotification()
        })
    }
    handleSelectAccount = (account) => {
        console.log(account)
        console.log(account.key)
        this.setState(state => {
            console.log(state.accountsArray)
            return {
                selectedAccount: state.accountsArray.find(item => item.id === (account.key - 0))
            }
        })
    }

    render() {
        return this.state.loading ? <div style={{ textAlign: 'center' }}><Spin size="large" /></div> : (<div className="container" >
            <Select
                showSearch
                className="full-width"
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    this.state.accountsArray.map((account, index) => {
                        return (<Option onClick={this.handleSelectAccount} key={account.id} value={account.id}>{account.name}</Option>)
                    })
                }
            </Select>

            {
                this.state.selectedAccount ? (

                    <div>
                        <Divider />
                        <Card title="Account" extra={<Link to={`account/${this.state.selectedAccount.id}`}>More Detail</Link>} className="full-width" >
                            <span className="special-content">{this.state.selectedAccount.name}</span>
                        </Card>
                    </div>) : ''
            }
        </div>)
    }
}

export default Account 

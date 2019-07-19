import React, { Component } from 'react'
import { Spin, Card, notification } from 'antd'
import axios from 'axios'

const ERROR = {
    message: 'Error Occurred',
    description:
        'Unable to retrieve data, please contact Admin.',
    duration: 0,
}
const SUCCESS = {
    message: 'SUCCESSFULLY DELETED!',
    description:
        'Redirecting to Acount page now...',
    duration: 2,
}
const openNotification = (args) => {
    notification.open(args)
}

class AccountDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: {},
            loading: true
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id // get the param for request --> id of the account
        axios.get(`/accounts/${id}`).then(res => {
            const data = res.data
            console.dir(data)
            this.setState({
                loading: false,
                profile: data
            })
        }).catch(err => {
            console.log('err', err)
            openNotification(ERROR)
        })
    }
    handleDelete = (event) => {
        event.preventDefault()
        console.log(event.currentTarget.dataset.id)
        const id = event.currentTarget.dataset.id
        axios.delete(`/accounts/${id}`).then(res => {
            console.log(res)
            openNotification(SUCCESS)
            setTimeout(() => {
                this.props.history.push('/');
            }, 1000);

        }).catch(err => {
            console.log('err', err)
            openNotification(ERROR)
        })
    }


    render() {

        const { nameFirst, nameLast, gender, email, ip, id } = this.state.profile.id ? this.state.profile : {}

        return this.state.loading ? <Spin /> : (<div className="container" >
            {
                id ? (
                    <Card className="full-width" title="Account Detail" extra={<a href="/" data-id={id} onClick={this.handleDelete}>Delete</a>}>
                        <ul className="left-align details">
                            <li><span>User ID:</span> {id}</li>
                            <li><span>First Name:</span> {nameFirst}</li>
                            <li><span>Last Name:</span> {nameLast}</li>
                            <li><span>Gender:</span> {gender}</li>
                            <li><span>Email:</span> <a href={email}>{email}</a> </li>
                            <li><span>IP:</span> <a href={ip}>{ip}</a></li>
                        </ul>
                    </Card>
                ) : ''
            }
        </div>)
    }
}

export default AccountDetail

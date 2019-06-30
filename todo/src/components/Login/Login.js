import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

function checkSessionId() {

    const sessionId = window.sessionStorage.getItem('todo_user_id') ? window.sessionStorage.getItem('todo_user_id') : ''
    if (!!sessionId) {
        return sessionId
    }
    else {
        return ''
    }

}
function handleLogin(username, password, props) {

    axios.post('http://localhost:3001/login', {
        username,
        password
    }).then(res => {
        console.dir(res)
        if(res.data && res.data.results && res.data.results.userId) {
            console.log('Login successful')
            window.sessionStorage.setItem('userId', res.data.results.userId)
            props.history.push('/about/');
        }
    })
}

function Login(props) {

    // const [pageTitle, setPageTitle] = useState(checkSessionId())
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (<div>

        <p>
            <label>Username<input onChange={(event) => { setUsername(event.target.value); console.log(event.target.value) }} placeholder="xxx"></input></label>
        </p>
        <p>
            <label>Password<input onChange={(event) => { setPassword(event.target.value); console.log(event.target.value) }} placeholder="*****"></input></label>
        </p>

        <button onClick={() => {
            if (username === '' || password === '') {
                alert('username and password cannot be null!')
            } else {
                handleLogin(username, password, props)
            }

        }}>Login</button>

    </div>)

}

export default withRouter(Login)

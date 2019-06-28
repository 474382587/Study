import React from 'react'
import { useState } from 'react'

function Login() {

    const [pageTitle, setPageTitle] = useState('Login')
 

    return (<div>

        This is { pageTitle } Page 


        <button onClick={() => setPageTitle('Changed Login')}>Change Page Title</button>
    </div>)

}

export default Login

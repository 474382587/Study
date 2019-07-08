import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";




// function testPost() {
// axios.post('http://node.webdevjoe.com//todos', { todo: JSON.stringify(['123', '123123123', '3123123123']), username: 'joseph' }).then(res => {
//     console.log('all todos ');
//     console.dir(res)
//     // return res.data.results.todo ? JSON.stringify(res.data.results.todo) : ['test1234']
// })
// }



function TodoList() {
    const [todoItems, setTodoItems] = useState(['test1'])
    const [todoItem, setTodoItem] = useState('')
    // function handleInputChange(event) {

    // }
    function handleSubmit() {
        console.log(todoItem)
        if (!!todoItem) {
            let array = todoItems.map(e => e)
            array.push(todoItem)
            const todoString = JSON.stringify(array)
            console.dir(todoString)
            axios.post('http://node.webdevjoe.com//todos', { todo: todoString, username: 'joseph' }).then(res => {
                console.log('all todos ');
                console.dir(res)
                // return res.data.results.todo ? JSON.stringify(res.data.results.todo) : ['test1234']
                // submitCallback()
                const username = window.sessionStorage.getItem('userId') || ''
                getAllTodoItems(username).then(res => {
                    console.log('second get all ')
                    setTodoItems(res)
                })
            })
        } else {
            alert('cannot be empty!')
        }

        // setTimeout(() => {
        //    setTodoItems([1,2,3]) 
        // }, 1000);
    }

    function submitCallback() {

    }
    function getAllTodoItems(username) {

        return axios.get('http://node.webdevjoe.com//todos?userId=' + username).then(res => {
            console.log('getting all todos from server');
            console.dir(res)
            return res.data.results.todo ? JSON.parse(res.data.results.todo) : ['test1234']
        })


    }



    console.log('initialized!')


    useEffect(() => {
        const username = window.sessionStorage.getItem('userId') || ''
        getAllTodoItems(username).then(res => {
            setTodoItems(res)
        })
    }, [])
    useEffect(() => {
        console.log('changed!')
        console.log(todoItems)
    }, [todoItems])




    return (<div>
        {
            todoItems.map((item, index) => {
                return <p key={index}>{index}. {item}</p>
            })
        }
        <input onChange={(event) => { setTodoItem(event.target.value) }} placeholder="Enter your todo item here: "></input>
        <button onClick={(event) => {
            handleSubmit(event, todoItems)
        }}>Submit</button>
    </div>)
}


export default TodoList

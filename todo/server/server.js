const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

// mysql connection
const connection = mysql.createConnection({
    host: "104.200.16.180",
    database: 'webdevjo_todo_list',
    user: "webdevjo_todo",
    password: ""
})


connection.connect(err => {
    if (err) {
        console.log('err occured')
        return
    }
    console.log('connected to Database!')
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // connection.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
})
// var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// connection.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });


// connection.query("SELECT * FROM customers", function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/test', (req, res) => {
    res.send({
        status: 200,
        results: {
            test: 'success'
        }
    })
})

app.post('/login', (req, res) => {

    // console.log(JSON.stringify(req, null, 2))
    const username = req.body.username
    const password = req.body.password

    console.log('username ', username, ' password ', password)

    connection.query({
        sql: 'SELECT * FROM `customers` WHERE `name` = ?',
        timeout: 40000, // 40s
    },
        [username],
        function(error, results, fields) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            // res.send({
            //     results: results,
            //     status: 200,
            //     message: 'Successful'
            // })

            if (results.length < 1) {
                res.send({
                    status: 200,
                    results: {
                        message: 'User does not exist!'
                    }
                })
            } else {
                const array = results.filter(result => {
                    return result.password === password
                })
                if (array.length > 0) {
                    res.send({
                        status: 200,
                        results: {
                            message: 'Login Successful!',
                            userId: username
                        }
                    })
                } else {
                    res.send({
                        status: 200,
                        results: {
                            message: 'Password does not match our records!'
                        }
                    })
                }
            }

            console.log('++++++++ ', results, ' +++++++')
        }
    );

})



app.get('/todo', (req, res) => {

    let queryString = 'INSERT INTO customers SET ?'

    // let query = connection.query(queryString, { name: "Joseph", address: "9269 University Crescent" }, (err, results, fields) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     // console.log('query: ', JSON.stringify(query, null, 2))
    //     console.log('results: ', JSON.stringify(results, null, 2))
    //     console.log('fields: ', JSON.stringify(fields, null, 2))
    // })


    connection.query({
        sql: 'SELECT * FROM `customers` WHERE `name` = ?',
        timeout: 40000, // 40s
    },
        ['Joseph'],
        function(error, results, fields) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            res.send({
                results: results,
                status: 200,
                message: 'Successful'
            })
        }
    );



})

app.listen(port, () => {
    console.log('server started at port 3001')
})

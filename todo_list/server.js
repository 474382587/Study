const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

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
connection.query("SELECT * FROM customers", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
});







app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/todo', (req, res) => {

    let queryString = 'INSERT INTO customers SET ?'




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
    console.log('server started at port 3000')
})

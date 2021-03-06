const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err, ' Unable to connect MongoDB Server');
    }
    console.log('MongoDB connected');

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne(
    //     {
    //         text: 'Something to do',
    //         completed: false
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log(
    //             'add successful ',
    //             JSON.stringify(result.ops, undefined, 2)
    //         );
    //     }
    // );

    // db.collection('Users').insertOne(
    //     {
    //         name: 'Andrew',
    //         age: 25,
    //         location: 'Canada'
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log(JSON.stringify(result, undefined, 2));
    //     }
    // );

    db.collection('Users')
        .find({
            _id: new ObjectID('5c624359264e6a69989f0f6a')
        })
        .count((err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res);
        });

    // db.collection('Users')
    //     .deleteMany({
    //         name: 'Joseph'
    //     })
    //     .then(
    //         res => {
    //             console.log('good');
    //         },
    //         err => {
    //             console.log('err');
    //         }
    //     );

    client.close();
});

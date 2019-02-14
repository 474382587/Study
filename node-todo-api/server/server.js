var express = require('express');
var { ObjectID } = require('mongodb');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var _ = require('underscore');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(
        doc => {
            res.send(doc);
        },
        err => {
            res.status(400).send(err);
        }
    );
});

app.get('/todos', (req, res) => {
    Todo.find().then(
        todos => {
            res.send({ todos });
        },
        err => {
            res.status(400).send(err);
        }
    );
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('<h1>Page Not Found</h1>');
    }
    Todo.findById(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send('<h1>Page Not Found</h1>');
            }
            res.send({ todo });
        })
        .catch(e => {
            res.status(400).send(e);
        });
    // res.send(JSON.stringify(req.params, undefined, 2));
});

// delete

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('<h1>Page Not Found</h1>');
    }
    Todo.findByIdAndRemove(id)
        .then(todo => {
            console.log(todo);
            if (todo) {
                return res.send({ todo });
            }
            res.status(404).send('not found');
        })
        .catch(e => {
            res.status(404).send(e);
        });
});
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('<h1>Page Not Found</h1>');
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.complete = true;
        body.completeAt = new Date().getTime();
    } else {
        body.complete = false;
        body.completeAt = null;
    }

    Todo.findOneAndUpdate(id, { $set: body }, { new: true })
        .then(todo => {
            if (todo) {
                return res.send(todo);
            }
            return res.status(404).send();
        })
        .catch(e => {
            res.status(400).send(e);
        });
});

app.listen(port, () => {
    console.log('Started on port ' + port);
});

module.exports = { app };

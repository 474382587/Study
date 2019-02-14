const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');
const { app } = require('../server');

const { Todo } = require('../models/todo');
const todos = [
    { text: '1st', _id: new ObjectID() },
    { text: '2', _id: new ObjectID() },
    { text: '3', _id: new ObjectID() },
    { text: '44', _id: new ObjectID() }
];
beforeEach(done => {
    Todo.remove({})
        .then(() => {
            return Todo.insertMany(todos);
        })
        .then(() => {
            done();
        });
});

describe('POST /todos', () => {
    it('should create a new todo', done => {
        var text = 'test todo';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect(res => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({ text })
                    .then(todos => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    })
                    .catch(e => {
                        done(e);
                    });
            });
    });
});

describe('GET /todos', () => {
    it('should get all todos', done => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect(res => {
                expect(res.body.todos.length).toBe(4);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('shoould return todo doc', done => {
        console.log(todos[0]._id.toHexString());
        request(app)
            .get('/todos/' + todos[0]._id.toHexString())
            .expect(200)
            .expect(res => {
                console.log(res.body);
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404', done => {
        request(app)
            .get('/todos/12')
            .expect(404)
            .end(done);
    });
    it('should retuen 404 if todo not found ', done => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .get('/todos/' + hexId)
            .expect(404)
            .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    it('remove a todo', done => {
        var hexId = todos[0]._id.toHexString();
        console.log(hexId);
        request(app)
            .delete('/todos/' + hexId)
            .expect(200)
            .expect(res => {
                console.log(res.body.todo._id);
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.findById(hexId)
                    .then(todo => {
                        expect(todo).toNotExist();
                        done();
                    })
                    .catch(e => done(e));
            });
    });
    it('should return 404 if todo not found', done => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .delete('/todos/' + hexId)
            .expect(404)
            .end(done);
    });
    it('should return 404 if object id is not valid', done => {
        request(app)
            .delete('/todos/1')
            .expect(404)
            .end(done);
    });
});

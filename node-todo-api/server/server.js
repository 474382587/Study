var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    completeAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: '   Cook lunch 2  ',
    complete: false,
    completeAt: new Date().getTime()
});

newTodo.save().then(
    doc => {
        console.log('success: ', doc);
    },
    e => {
        console.log(e);
    }
);

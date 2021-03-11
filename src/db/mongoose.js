const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })
//
// const task = new Task({
//     description: 'Wake up at 9am',
//     completed: true
// });
//
// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const newUser = new User({
    name: 'Bryan',
    email: 'brynneprince@gmail.com',
    age: 22
})

newUser.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
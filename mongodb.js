const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectionUrl, {useNewUrlParser: true,  useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Brynne',
    //     age: 22
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }
    //
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Jenny",
    //         age: 31
    //     },
    //     {
    //         name: "Kevin",
    //         age: "54"
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents');
    //     }
    //
    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description: "Wake up",
            completed: true
        },
        {
            description: "Make bed",
            completed: true
        },
        {
            description: "Shower",
            completed: false
        }
    ], (error, results) => {
        if(error) {
            return console.log('Unable to insert tasks');
        }

        console.log(results.ops);
    })
})
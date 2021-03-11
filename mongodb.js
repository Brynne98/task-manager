const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectID;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectionUrl, {useNewUrlParser: true,  useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

})
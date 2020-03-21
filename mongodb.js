// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//destructuring
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database');
        }
        const db = client.db(databaseName);
        // db.collection('users').updateOne({
        //     _id: new ObjectID("5e52168390315a108c86cb94")
        // }, {
        //     $inc: {
        //         age: 1
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }
        // ).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // db.collection('users').deleteMany({ age: 27 }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        db.collection('tasks').deleteOne({ description: "eat" }).
            then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })
    });
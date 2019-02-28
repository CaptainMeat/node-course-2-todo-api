// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb') //es6 destructuring -- does the same as above in terms of MongoClient, but adds ObjectID as a separate variable

// const user = {name: 'Jason', age: 25}
// const {name} = user
// console.log(name)

// const obj = new ObjectID()
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // const db = client.db('TodoApp')
    // db.collection('Users').insertOne({
    //     name: 'Jason Bancroft',
    //     age: 44,
    //     location: 'Corona'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    client.close()
})
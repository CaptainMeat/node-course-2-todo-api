const {MongoClient, ObjectID} = require('mongodb') //es6 destructuring -- does the same as above in terms of MongoClient, but adds ObjectID as a separate variable

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    const db = client.db('TodoApp')
    
    // // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c7840cbe5b50b3fbcc3987d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((docs) => {
    //     console.log(docs)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c782773a52e1f1820284c60')
    }, {
        $set: {
            name: 'Jennifer Smith'
        }, $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })

    client.close()
})
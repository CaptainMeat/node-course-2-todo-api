const {MongoClient, ObjectID} = require('mongodb') //es6 destructuring -- does the same as above in terms of MongoClient, but adds ObjectID as a separate variable

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    const db = client.db('TodoApp')
    
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c782cb4a5f6739a95d8b48a')}).then((result) => {
        console.log(result)
    })

    client.close()
})
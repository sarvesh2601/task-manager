
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId // a method on mongodb

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('unable to connect to server')
    }

    const reference = client.db(databaseName) //made you a database with name task-manager and got you it's address/reference

    // reference.collection('users').updateOne({
    //     _id: ObjectID("63103076dff92650d7834c72")
    // }, {
    //     $inc: {
    //         age: 5
    //       }
    // }
    // ).then((resolve)=>{
    //     console.log(resolve)
    // }).catch((error)=>{
    //     console.log(error)
    // }) 

    // reference.collection('tp').updateMany({
    //     name: 'Sarvesh'
    // }, {
    //     $set: {
    //         name: 'Mohit'
    //     }
    // }).then((resolve)=>{
    //     console.log(resolve)
    // }).catch((error)=>{
    //     console.log(error)
    // })

})
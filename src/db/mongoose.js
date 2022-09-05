
const mongoose = require('mongoose')
const validator = require('validator')

const { default: isEmail } = require('validator/lib/isEmail')

//url of the db along with the name you want to give to your database
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api' 

//connection db to mongoose
mongoose.connect(connectionURL)

//defining mongoose model

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        default: 'Anonymous',
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    Email: {
        type: String,
        validate(value) {
           const validity =  validator.isEmail(value)
           if(validity == false){
            throw new Error('Invalid Email')
           }
        },
        trim: true,
        lowercase: true   
    },
    Password: {
        type: String,
        validate(value) {
            if(value.length <= 6 || value.includes("password")){
                throw new Error('Try Another Password!')
            }
        },
        trim: true,
        required: true
    }
})

const task = mongoose.model('task', {
    Description: {
        type: String,
        required: true
    },
    Completed: {
        type: Boolean,
        required: false,
        default: false
    }
})
//making an instance of the model defined
// const user1 = new User({
//     name: 'Sarvesh Kumar    ',
//     age: 19,
//     Email: 'f20202517@hyderabad.bits-pilani.ac.in',
//     Password: ' password '
// })

// user1.save().then(()=>{
//     console.log(user1)
// }).catch((error)=>{
//     console.log(error)
// })

const task1 = new task({
    Description: 'EM-LAB',
    Completed: true
})

// user1.save().then(()=>{
//     console.log(user1) // since then returns the user you created, i'll simply log that insted of providing an argument inside of then
// }).catch((error)=>{
//     console.log(error)
// })
task1.save().then((resolve)=>{
    console.log(resolve)
}).catch((error)=>{
    console.log(error)
})

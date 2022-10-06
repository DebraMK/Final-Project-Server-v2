if (process.env.ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const location = require('./routes/location')
const userRoutes = require('./routes/User')

// middleware
app.use(express.json()); //translates json
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Test
app.get('/', (req, res) => {
    res.send('Where the hell do you want to eat??')
})

// routes
app.use('/location', location )
app.use('/user', userRoutes)

// Listen for connection 
const PORT = process.env.PORT
app.listen(PORT, () => {
    //DB connection
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

    console.log(`listening on port ${PORT}`)
});
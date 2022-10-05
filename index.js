require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const location = require('./routes/location')
const signUp = require('./routes/Signup')
const sequelize = require('./config/config')


// middleware
app.use(cors())
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Test
app.get('/', (req, res) => {
    res.send('Where the hell do you want to eat')
})

// routes
app.use('/location', location )



const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
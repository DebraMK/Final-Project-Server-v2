const express = require('express')
const cors = require('cors')
require('dotenv').config()

const location = require('./routes/location')
const thisRoute = require('./routes/thisRoute')

const app = express()

// middlewares
app.use(cors())
app.use(express.json());

//Test
app.get('/', (req, res) => {
    res.send('Where the hell do you want to eat')
})

// routes
app.use('/location', location )

// database connection


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
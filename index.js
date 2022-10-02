const express = require('express')
require('dotenv').config()

const thisRoute = require('./routes/thisRoute')

const app = express()

// middlewares

// routes
app.use('/restaurant', thisRoute)



// database connection


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
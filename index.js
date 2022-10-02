const express = require('express')
const location = require('./controllers/location')
const cors = require('cors')
require('dotenv').config()


const placesRoutes = require('./controllers/places')

const app = express()

// middlewares
app.use(cors())

// routes
app.use('/location', location )



// database connection


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
const express = require('express')
const cors = require ('cors')


const placesRoutes = require('./controllers/places')

const app = express()

// middlewares

// routes
app.use('/place', placesRoute)

// database connection


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
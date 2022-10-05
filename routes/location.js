const router = require('express').Router()
const axios = require('axios')
require('dotenv').config()

router.get('/cuisine/:places', async (req, res) => {
    const { places } = req.params
    console.log(req.query)
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat}%2C${req.query.lng}&radius=10000&type=restaurant&keyword=${places}&key=${process.env.REACT_APP_API_KEY}=`)
    res.json(data)
})

module.exports = router
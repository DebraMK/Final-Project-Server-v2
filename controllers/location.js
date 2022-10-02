const router = require('express').Router()
const axios = require('axios')
require('dotenv').config()

router.get('/food/:places', async (req, res) => {
    const { places } = req.params
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.2133971%2C-89.0645187&radius=10000&type=restaurant&keyword=${places}&key=${process.env.REACT_APP_API_KEY}=`)
    res.json(data)
    
})

module.exports = router
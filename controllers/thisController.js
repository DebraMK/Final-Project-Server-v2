const Restaurant = require('../models/thisModel')

function getRestaurants(req, res) {
    res.send('restaurants')
}

module.exports = {
    getRestaurants
}
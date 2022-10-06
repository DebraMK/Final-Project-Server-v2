const express = require('express')
const router = express.Router()

const { signUp, authRoute, logIn, userProfile } = require('../controllers/User')
const { validateJWT } = require('../middleware/auth')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

//Creates a user
router.post('/signup', signUp)

//user validation
router.get('/authenticated-route', validateJWT, authRoute)

//Login 
router.post('/login', logIn)

//GET profile 
router.get('/profile', validateJWT, userProfile)



module.exports = router
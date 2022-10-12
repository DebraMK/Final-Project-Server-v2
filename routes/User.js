const express = require('express')
const router = express.Router()

const { signUp, authRoute, logIn, userProfile, register } = require('../controllers/User')
const { validateJWT } = require('../middleware/auth')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

//POST: Creates a user
router.post('/signup', signUp)

//GET: user validation
router.get('/authenticated-route', validateJWT, authRoute)

//POST: Login 
router.post('/login', logIn)

//GET: profile 
router.get('/profile', validateJWT, userProfile)

//temp route
router.post('/register', register)



module.exports = router
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//creates a new user
async function signUp(req, res){
    const { username, password } = req.body

    const user = await new User({
        username, //key and value are the same so no need to reference value
        password: await bcrypt.hash(password, 12)
    }).save()

    const payload = {
        username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.send(token)
};


//login
async function logIn(req, res){
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if(!user){
        res.status(422)
        res.json({ 'message':'invalid credentials' })
        return
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {
        res.status(422)
        res.json({ 'message' : 'invalid credentials' })
        return
    }

    const payload = {
        _id: user._id,
        username: user.username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.send(token)
    
}

//verify JWT
function verifyJWT (req, res){
    const { token } = req.body

     try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        res.status(422);
        res.json({ 'message': 'expired' });
        return;
    }

    res.json({ message: 'good' });
    return;
}

//user validation - test :any route that will require you to prove ID
function authRoute(req, res){
    res.send("I sent you a message")
};

//user profile date (Homescreen of an account)
async function userProfile(req, res){
    const { username } = req.user //this is from the token that was created in auth

    const user = await User.find({ username }).populate('profile') //TODO create an object with profile data to send back and creat a profile page

    //res.send(username)
}


module.exports = {
    signUp,
    authRoute,
    logIn, 
    verifyJWT, 
    userProfile
}
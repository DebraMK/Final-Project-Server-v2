const jwt = require('jsonwebtoken')


//authentication
function validateJWT(req, res, next){
    const authHeader = req.headers['authorization']

    if(authHeader){
        //attempt validation
        try {
            //console.log(authHeader)
            const token = authHeader.split(' ')[1] //Auth header -> Bearer token
            const validToken = jwt.verify(token, process.env.JWT_SECRET)
            req.user = validToken
            next()// takes you back to the "next" function that is called; in this case takes you back to the controller
            return
        } catch (error) {
            res.status(401).json({"message": "unauthorized user"})
            return
        }
    } else {
        res.status(401).json({"message": "unauthorized user"})
        return
    }
}

module.exports = {
    validateJWT
}

//this validation can be placed between the route and controller (in routes folder) to protect that route
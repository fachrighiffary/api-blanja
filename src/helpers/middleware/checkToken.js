const jwt = require("jsonwebtoken")
const form = require("../form")

module.exports = (req, res, next) => {
    // token posisinya ada di header
    const bearerToken = req.header("x-access-token");
    if(!bearerToken){
        form.error(res, {
            msg : "Please Login First",
            status : 401,
        })
    }
    //Bearer token
    const token = bearerToken.split(" ")[1];
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        req.decodedToken = decodedToken;
        console.log(req.decodedToken.level)
        next();
    } catch(error){
        form.error(res,{
            msg : "Invalid token",
            error,
            status : 401
        })
    }



}
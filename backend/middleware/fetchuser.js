const jwt = require("jsonwebtoken");
const JWT_SECREAT = "Shukrana@123";
const fetchuser = (req,res,next)=>{
    //Get the user from jwt tokend and add id to request
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECREAT);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"});
    }
}
module.exports = fetchuser;
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');
//jwt secreat
const JWT_SECREAT = "Shukrana@123";
//ROUTE1 - Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    // Create a new user
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
      name: req.body.name,
      password: secpass,
      email: req.body.email,
    })
    //creating token to  verify the user 
    const data = {
      user :{
        id:user.id
      }
    }
    const authtoken = jwt.sign(data , JWT_SECREAT);
    
    res.json(authtoken);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//ROUTE 2 - Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
   // If there are errors, return Bad request and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   const {email,password} = req.body;
   try {
    let user =await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"please try to login with correct Credentials"});
    }
    //compareing password that user entered with the hash pass
    const passwordCompare = await bcrypt.compare(password , user.password);
    if(!passwordCompare){
      return res.status(400).json({error:"please try to login with correct Credentials"});
    }
    const data = {
      user :{
        id:user.id
      }
    }
    const authtoken = jwt.sign(data , JWT_SECREAT);
    
    res.json(authtoken);
   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
//ROUTE 3 -Get logged user detailsusing: using: POST "/api/auth/getuser".login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    var  userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  }catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router
const express = require('express');
const router = express.Router();
const passport = require('../auth/passport');
const dbAPI = require('../db/dbAPI');

router.post('/signup', (req, res, next) => {
  const user = req.body  
  dbAPI.registerUser(user, (err) => {
    if(err) {
      if(err.code === '23505') {
        res.status(401)
           .json({ message: 'Username already exists' })
      } else { next(err) }
    } else {
      res.status(200)
         .json({ message: 'User registered succesfully' })
    }
  })
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log(req)
  res.status(200)
     .json({
       user: req.user,
       message: 'User logged in',
       err: null
     })
}) 

router.get('/logout', (req, res, next) => {
  if(req.user) { 
    req.logout();
    res.status('200')
      .json({
        user: null,
        message: "Log out success",
        err: null
      })
  } else {
    //Think about a better way to handle/see this
    res.status('401')
       .json({
        user: null,
        message: "User need to be logged in for Log out",
        err: null
      })
  }
})

router.get('/profile', (req, res, next) => {
    if(req.user){
      dbAPI.getUserByUsername(user.username, (err) => {
          res.status('200')
          .json({
              username: req.user.username,
              message: "profile fetched"
          })
      })
      }else{
          res.status('401')
          .json({
              username:null,
              message: "User needs to login",
              err: null
          })
      }
  })

router.get('/feed', (req,res,next) => {
  if(req.user){
    dbAPI.getFeed(user.username, (err) => {
        res.status('200')
        .json({
            username: req.user.username,
            message: "Feed has been successfully fetched"
        })
    })
    }else{
        res.status('401')
        .json({
            username:null,
            message: "User needs to login",
            err: null
        })
    }
})

router.get('/posts', (req,res,next) => {
    if(req.user){
      dbAPI.getPosts(user.username, (err) => {
          res.status('200')
          .json({
              username: req.user.username,
              message: "posts are fetched"
          })
      })
      }else{
          res.status('401')
          .json({
              username:null,
              message: "User needs to login",
              err: null
          })
      }
  })


//Test route problems when deserializing
router.get('/alejo', (req, res, next) => {
  console.log('USER COMMING TO /alejo', req.user)
    res.status('200')
      .json({
        message: 'Hello Alejo',
      })
}) 
module.exports = router;

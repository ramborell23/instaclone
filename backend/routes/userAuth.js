const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const dbAPI = require("../db/dbAPI");
const { loginRequired } = require("../auth/helpers");

router.post("/signup", (req, res, next) => {
    dbAPI.registerUser(req, (err, user) => {
      if (err) {
        if (err.code === "23505") {
          res.status(401).json({ message: "Username already exists" });
        } else {
          next(err);
        }
      } else {
        req.login(user, (err) => {
          if(err) { return next(err) }
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
 
        })
      }
    })
})
  
  router.post("/login", passport.authenticate("local"), (req, res) => {
    res.status(200).json({
      user: req.user,
      message: "User logged in",
      err: null
    });
  });
  
  router.get("/logout", loginRequired, (req, res, next) => {
    req.logout();
    res.status("200").json({
      user: null,
      message: "Log out success",
      err: null
    });
  });

  router.get("/alejo", loginRequired, (req, res, next) => {
    console.log('REQ.USER?? ===>', req.user)
    res.status("200").json({
      user: null,
      message: "reached /alejo success",
      err: null
    });
  })

  module.exports = router;
const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const dbAPI = require("../db/dbAPI");
const { loginRequired } = require("../auth/helpers");

router.post("/signup", (req, res, next) => {
    dbAPI.registerUser(req, (err, data) => {
      if (err) {
        if (err.code === "23505") {
          res.status(401).json({ message: "Username already exists" });
        } else {
          next(err);
        }
      }
    }).then(response => {
        passport.authenticate("local", (err, response, info) => {
          if (response) {
            console.log(response)
            res.status(200).json({
              status: "success",
              data: response,
              message: "Registered one user"
            });
          }
        })(req, res, next);
      })
      .catch(err => {
        res.status(500).json({
          status: "error",
          error: err
        })
      })
    });
  
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

  module.exports = router;
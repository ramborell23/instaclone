const db = require("./index");

const getUserByUsername = (req, res, next) => {
  db
    .any(
      "SELECT id, username, fullname, profile_pic FROM users WHERE username = $1",
      [req.user]
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "your user is retrieved"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getPosts = (req, res, next) => {
  db
    .any(
      "SELECT * FROM posts WHERE owner_id = (SELECT id FROM users WHERE username = $1)",
      [req.user]
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        posts: data.imageurl,
        message: "The posts have been retrieved"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getFeed = (req, res, next) => {
  db
    .any(
      "SELECT * FROM posts WHERE owner_id = (SELECT follower_id FROM followinfo INNER JOIN users ON followinfo.owner_id = users.id WHERE users.username = $1)",
      [req.user]
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        feed: data.imageurl,
        message: "The follower's feeds have been retrieved"
      });
    })
    .catch(err => {
      return next(err);
    });
};

function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(500).send("error while trying to log in");
    } else if (!user) {
      res.status(401).send("invalid username/password");
    } else if (user) {
      req.logIn(user, function(err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send(user);
        }
      });
    }
  })(req, res, next);
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function registerUser(req, res, next) {
  return authHelpers //import the auth/helper file
    .createUser(req) //function from helper.js
    .then(response => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
        }
      })(req, res, next);
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err
      });
    });
}

module.exports = {
  getUserByUsername: getUserByUsername,
  getPosts: getPosts,
  getFeed: getFeed,
  loginUser: loginUser,
  logoutUser: logoutUser,
  registerUser: registerUser
};

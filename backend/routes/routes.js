const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const dbAPI = require("../db/dbAPI");

router.post("/signup", (req, res, next) => {
  const user = req.body;
  dbAPI.registerUser(user, err => {
    if (err) {
      if (err.code === "23505") {
        res.status(401).json({ message: "Username already exists" });
      } else {
        next(err);
      }
    } else {
      res.status(200).json({ message: "User registered succesfully" });
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    user: req.user,
    message: "User logged in",
    err: null
  });
});

router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    res.status("200").json({
      user: null,
      message: "Log out success",
      err: null
    });
  } else {
    //Think about a better way to handle/see this
    res.status("401").json({
      user: null,
      message: "User need to be logged in for Log out",
      err: null
    });
  }
});

router.get("/feed", (req, res, next) => {
  if (req.user) {
    dbAPI.getFeed(req.user.username, (err, data) => {
      res.status("200").json({
        username: req.user.username,
        feed: data,
        message: "Feed has been successfully fetched"
      });
    });
  } else {
    res.status("401").json({
      username: null,
      message: "User needs to login",
      err: null
    });
  }
});

router.get("/posts", (req, res, next) => {
  if (req.user) {
    dbAPI.getPosts(req.user.username, (err, data) => {
      res.status("200").json({
        username: req.user.username,
        posts: data,
        message: "posts are fetched"
      });
    });
  } else {
    res.status("401").json({
      username: null,
      message: "User needs to login",
      err: null
    });
  }
});

router.post("/newpost", (req, res, next) => {
  const newPost = {
    ownerId: req.user.id,
    imageUrl: req.body.imageUrl,
    likes: JSON.stringify([]) //might have to change
  };

  if (req.user) {
    dbAPI.addPosts(newPost, err => {
      res.status("200").json({
        message: "post added"
      });
    });
  } else {
    res.status("401").json({
      username: null,
      message: "User needs to login",
      err: null
    });
  }
});

router.post("/likepost", (req,res,next) => {
    if(req.user){
        const newlike = {
            likedBy: req.user.username,
            postId: req.body.postId
        }
        dbAPI.postlikes(newlike, err => {
            res.status("200").json({
                message: "liked added"
            })
        })
    }else {
        res.status("401").json({
          username: null,
          message: "User needs to login",
          err: null
        });
      }

})

router.get("/likes", (req, res, next) => {
    const postId = {
        postId: req.body.postId
    }

    if(req.user){
        dbAPI.getLikes(postId, err => {
            res.status("200").json({
                
            })
        })
    }
})

router.post('/follow/:ownerId', /*loginRequired,*/(req, res, next) => {  
  const followerId = req.user.id;
  const ownerId = req.params.ownerId;
  dbAPI.addFollower(ownerId, followerId, (err, data) => {
    if(err) next(err);
    res.status(200)
       .json({message: `user ${followerId} is now following ${ownerId}`});
  })
})

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const dbAPI = require("../db/dbAPI");
const { loginRequired } = require("../auth/helpers");

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

router.get("/logout", loginRequired, (req, res, next) => {
  req.logout();
  res.status("200").json({
    user: null,
    message: "Log out success",
    err: null
  });
});

router.get("/feed", loginRequired, (req, res, next) => {
  dbAPI.getFeed(req.user.username, (err, data) => {
    res.status("200").json({
      username: req.user.username,
      feed: data,
      message: "Feed has been successfully fetched"
    });
  });
});

router.get("/posts", loginRequired, (req, res, next) => {
  dbAPI.getPosts(req.user.username, (err, data) => {
    res.status("200").json({
      username: req.user.username,
      posts: data,
      message: "posts are fetched"
    });
  });
});

router.post("/newpost", loginRequired, (req, res, next) => {
  const newPost = {
    ownerId: req.user.id,
    imageUrl: req.body.imageUrl
  };

  dbAPI.addPosts(newPost, err => {
    res.status("200").json({
      message: "post added"
    });
  });
});

router.post("/post/:likeId", loginRequired, (req, res, next) => {
  const newlike = {
    postId: Number(req.params.likeId),
    likedBy: req.user.username
  };

  dbAPI.postLikes(newlike, err => {
    res.status("200").json({
      message: "liked added"
    });
  });
});

router.get("/get/:postId", loginRequired, (req, res, next) => {
  const postId = req.params.postId;

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const dbAPI = require("../db/dbAPI");
const { loginRequired } = require("../auth/helpers");

router.get("/user", loginRequired), (req, res, next) => {
  dbAPI.getUserByUsername(req.user.username, (err, data) => {
    if(err){next(err)};
    res.status("200").json({
      feed: data,
      message: "Userinfo successfully fetched"
    });
  })
}

router.get("/feed", loginRequired, (req, res, next) => {
  dbAPI.getFeed(req.user.id, (err, data) => {
    if(err){next(err)};
    console.log(data)
    res.status("200").json({
      userId: req.user.id,
      feed: data,
      message: "Feed has been successfully fetched"
    });
  });
});

router.get("/posts", loginRequired, (req, res, next) => {
  dbAPI.getPosts(req.user.username, (err, data) => {
    if(err){next(err)};
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

  dbAPI.addPost(newPost, err => {
    if(err){next(err)};
    res.status("200").json({
      message: "post added"
    });
  });
});

router.post("/addlike/:likeId", loginRequired, (req, res, next) => {
  const newlike = {
    postId: Number(req.params.likeId),
    likedBy: req.user.username
  };

  dbAPI.addLike(newlike, err => {
    if(err){next(err)};
    res.status("200").json({
      message: "liked added"
    });
  });
});

router.get("/getlikes", loginRequired, (req, res, next) => {
  const userId = req.user.id;

  dbAPI.getLikes(userId, (err, data) => {
    if(err){next(err)};
    res.status("200").json(data);
  });
});

router.post("/follow/:ownerId", loginRequired,(req, res, next) => {  
    const followerId = req.user.id;
    const ownerId = req.params.ownerId;
    dbAPI.addFollower(ownerId, followerId, (err, data) => {
      if(err) next(err);
      res.status(200)
         .json({message: `user ${followerId} is now following ${ownerId}`});
    })
  })

router.get("/follow", loginRequired, (req, res, next) => {
  dbAPI.getFollows((err,data) => {
    if(err) next(err);
    res.status(200)
    .json(data)
  })
})

module.exports = router;

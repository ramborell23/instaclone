const db = require("./index");
const helpers = require('../auth/helpers');

const getUserByUsername = (username, callback) => {
  db
    .any(
      "SELECT * FROM users WHERE username = ${username}",
      {username: username}
    )
    .then(data => callback(null, data[0]))
    .catch(err => {
      callback(err, false)
    });
};

const registerUser = (req, callback) => {
  const newUser = {
      userName: req.body.username,
      fullName: req.body.fullname,
      passwordDigest: helpers.generatePasswordDigest(req.body.password),
      profilePicUrl: req.body.profilePicUrl  
  }

  return db.none('INSERT INTO users(username, fullname, password_digest, profile_pic )' +
          'VALUES (${userName}, ${fullName}, ${passwordDigest}, ${profilePicUrl})', newUser)
  .then(() => callback(null, newUser))
  .catch(err => callback(err, false))
}

const addPost = (postObj, callback) => {
  db.none('INSERT INTO posts(owner_id, imageurl) VALUES (${ownerId}, ${imageUrl})', postObj)
  .then(() => callback(null))
  .catch(err => callback(err))
}

const getPosts = (username, callback) => {
  db
    .any(
      "SELECT * FROM posts WHERE owner_id = (SELECT id FROM users WHERE username = ${username})",
      {username:username}
    )
    .then(data => callback(null, data))
    .catch(err => callback(err, false));
};

const addLike = (likesObj, callback) => {
  db
  .none(
    "INSERT INTO likesTable(post_id, liked_by) VALUES (${postId}, ${likedBy})", likesObj)
  .then(() => callback(null))
  .catch(err => callback(err))
};

const getLikes = (userId, callback) => {
  db.any('SELECT * FROM likesTable WHERE post_id = ANY(SELECT id FROM posts WHERE owner_id = ANY(SELECT owner_id FROM followinfo WHERE follower_id = ${userId}))', {userId:userId})
  .then(data => callback(null, data))
  .catch(err => callback(err, false))
}


const getFeed = (userId, callback) => {
  db
    .any(
      "SELECT * FROM posts WHERE owner_id = ANY(SELECT owner_id FROM followinfo INNER JOIN users ON followinfo.owner_id = users.id WHERE follower_id = ${userId})",
      {userId:userId}
    )
    .then(data => callback(null, data))
    .catch(err => callback(err, false));
};

const addFollower = (ownerId, followerId, callback) => {
  db.none('INSERT INTO followinfo (owner_id, follower_id) VALUES(${ownerId}, ${followerId})', {ownerId, followerId})
    .then(() => callback(null))
    .catch(err => callback(err, false))
}

const getFollows = (callback) => {
  db
  .any("SELECT owner_id, follower_id from followInfo")
  .then(data => callback(null, data))
  .catch(err => callback(err, false))
}

module.exports = {
  getUserByUsername: getUserByUsername,
  registerUser: registerUser,
  addPost: addPost,
  getPosts: getPosts,
  addLike: addLike,
  getLikes: getLikes,
  getFeed: getFeed,
  addFollower: addFollower,
  getFollows: getFollows
};

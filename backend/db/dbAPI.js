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

const registerUser = (user, callback) => {
  const newUser = {
      userName: user.username,
      fullName: user.fullname,
      passwordDigest: helpers.generatePasswordDigest(user.password),
      profilePicUrl: user.profilePicUrl,
      numberOfPosts: 0,
      numberOfFollowers: 0,
      numberOfFollowing: 0   
  }
  db.none('INSERT INTO users(username, fullname, password_digest, profile_pic, number_of_posts, number_of_followers, number_of_following )' +
          'VALUES (${userName}, ${fullName}, ${passwordDigest}, ${profilePicUrl}, ${numberOfPosts}, ${numberOfFollowers}, ${numberOfFollowing})', newUser)
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

const getFeed = (username, callback) => {
  db
    .any(
      "SELECT * FROM posts WHERE owner_id = ANY(SELECT follower_id FROM followinfo INNER JOIN users ON followinfo.owner_id = users.id WHERE users.username = ${username})",
      {username:username}
    )
    .then(data => callback(null, data))
    .catch(err => callback(err, false));
};

module.exports = {
  getUserByUsername: getUserByUsername,
  getPosts: getPosts,
  getFeed: getFeed,
  registerUser: registerUser
};

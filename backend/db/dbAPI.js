const db = require("./index");

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
        username: user.username,
        passwordDigest: authHelpers.generatePasswordDigest(user.password)
    }

    db.none('INSERT INTO users(username, passport_digest) VALUES (${username}, ${passwordDigest})', newUser)
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

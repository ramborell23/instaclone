
const bcrypt = require('bcryptjs');

const comparePasswords = (password, passwordDiggest) => {
    return bcrypt.compareSync(password, passwordDiggest);
}

const generatePasswordDigest = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

module.exports = {
  comparePasswords,
  generatePasswordDigest,
}

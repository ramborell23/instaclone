let db = require("../db/queries");
var express = require("express");
var router = express.Router(); 
const { loginRequired } = require("../auth/helpers"); 

router.get("/", loginRequired, db.getFeed);
router.post("/new", db.registerUser);
router.get("/user", loginRequired, db.getPosts); //having second thoughts might just condense this two funcs
router.get("/info", loginRequired, db.getUserByUsername);
router.post("/login", db.loginUser); 
router.get("/logout", loginRequired, db.logoutuser);

module.exports = router;

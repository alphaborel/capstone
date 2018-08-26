const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const jwt = require("jsonwebtoken");
const jwtSecret = "sandyseashellsbytheseashore";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.post("/login", function(req, res) {
  knex('users')
  .where({'username': req.body.username, 'password': req.body.password})
  .first()
  .then((user) => {
    console.log(user);
    if (!user) {
      res.sendStatus(400);
    }
    if (user.password === req.body.password) {
      delete user.password;
      res.json({user: user, token: jwt.sign({user}, jwtSecret)});
    } else {
      res.sendStatus(400);
    }
  })
})

router.post("/register", function(req, res) {
    knex('users').insert({
      username: req.body.username,
      password: req.body.password,
      businessName: req.body.businessName,
      email: req.body.email
    }, "*")
    .then((user) => {
      delete user.password;
      res.json({user: user, token: jwt.sign({user}, jwtSecret)});
    }).catch((e) => {
      console.error('somthing went wrong', e)
    })
})

module.exports = router;

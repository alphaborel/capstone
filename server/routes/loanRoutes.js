const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('loans')
    .select('*')
    .where('userId', req.params.id)
    .then(results => res.json(results))
});

router.get('/:id', function(req, res) {
  knex('loans')
    .select()
    .where('userId', req.params.id)
    .then(results => res.json(results))
});

router.post('/', function(req, res) {
  knex('loans')
    .insert(req.body, '*')
    .then(newLoan => res.json(newLoan))
});

router.patch('/:id', function(req, res) {
  knex('loans')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedLoan => res.json(updatedLoan))
});

router.delete('/:id', function(req, res) {
  knex('loans')
    .del()
    .where('id', req.params.id)
    .then(removedLoan => removedLoan)
});

module.exports = router;

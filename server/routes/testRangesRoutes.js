const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('ranges')
    .select()
    .orderBy('id', 'asc')
    .then(results => res.send(results))
});

router.get('/:id', function(req, res) {
  knex('ranges')
    .select()
    .where('id', req.params.id)
    .then(results => res.json(results[0]))
});

router.patch('/:id', function(req, res) {
  knex('ranges')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedRange => res.json(updatedRange))
});

router.delete('/:id', function(req, res) {
  knex('components')
    .del()
    .where('id', req.params.id)
    .then(removedRange => removedRange)
});

module.exports = router

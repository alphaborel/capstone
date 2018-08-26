const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/', function(req, res, next) {
  knex('doctors')
    .select()
    .orderBy('id', 'asc')
    .then(results => res.json(results))
});

router.get('/:id', function(req, res) {
  knex('doctors')
    .select()
    .where('id', req.params.id)
    .then(results => res.json(results))
});

router.post('/', function(req, res) {
  knex('doctor')
    .insert(req.body, '*')
    .then(newDoctor => res.json(newDoctor))
});

router.patch('/:id', function(req, res) {
  knex('users')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedDoctor => res.json(updatedDoctor))
});

router.delete('/:id', function(req, res) {
  knex('doctor')
    .del()
    .where('id', req.params.id)
    .then(removedDoctor => removedDoctor)
});

module.exports = router

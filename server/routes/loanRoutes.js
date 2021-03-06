const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id', function(req, res, next) {
  console.log('first route');
  knex('loans')
    .select('*')
    .where('userId', req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch((e) => {
      console.error('get route', e)
    });
});

router.get('/loan/:id', function(req, res) {
  console.log('second route', req.params.id);
  knex('loans')
    .select()
    .where('id', req.params.id)
    .then(results => res.json(results))
});

router.post('/', function(req, res) {
  console.log('post route');
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
  console.log('delete route', req.params.id);
  knex('loans')
    .del()
    .where('id', req.params.id)
    .then(removedLoan => res.json(removedLoan))
});

module.exports = router;

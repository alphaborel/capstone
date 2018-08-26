const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('notes')
    .select()
    .where({"notes.doctor_id": req.decoded.doctor.id})
    .then(results => {
      res.json(results)
    })
});

router.get('/:id', function(req, res) {
  knex('notes')
    .select()
    .where({'id': req.params.id, 'notes.doctor_id': req.params.doctor_id})
    .then(results => res.json(results[0]))
});

router.post("/", function(req, res) {
    knex('notes').insert({
      date: req.body.payload.date,
      detail: req.body.payload.detail,
      doctor_id: req.body.payload.doctor_id,
      patient_id: req.body.payload.patient_id,
    }, "*")
    .then((newNote) => {
      res.json(newNote);
    })
});

router.patch('/:id', function(req, res) {
  knex('notes')
    .update(req.body)
    .where({'id': req.params.id, 'notes.doctor_id': req.params.doctor_id})
    .returning('*')
    .then(updatedNote => res.json(updatedNote))
});

router.delete('/:id', function(req, res) {
  knex('notes')
    .del()
    .where('id', req.params.id)
    .returning('*')
    .then(removedNote => res.json(removedNote))
});

module.exports = router

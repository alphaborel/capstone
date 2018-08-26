const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('patients')
    .select()
    .where("doctor_id", req.decoded.doctor.id)
    .orderBy('last_name', 'asc')
    .then(results => res.json(results))
});

router.get('/:id', function(req, res) {
  knex('patients')
    .select()
    .where('id', req.params.id)
    .then(results => res.json(results[0]))
});

router.post("/", function(req, res) {
    knex('patients').insert({
      first_name: req.body.payload.first_name,
      last_name: req.body.payload.last_name,
      email: req.body.payload.email,
      password: req.body.payload.password,
      age: req.body.payload.age,
      height: req.body.payload.height,
      weight: req.body.payload.weight,
      doctor_id: req.body.payload.doctor_id,
      eye_color: req.body.payload.eye_color,
      hair_color: req.body.payload.hair_color,
      sex: req.body.payload.sex
    }, "*")
    .then((newPatient) => {
      res.json(newPatient);
    })
});

router.patch('/:id', function(req, res) {
  knex('patients')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedPatient => res.json(updatedPatient))
});

router.delete('/:id', function(req, res) {
  knex('patients')
    .del()
    .where('id', req.params.id)
    .returning('*')
    .then(removedPatient => res.json(removedPatient))
});

module.exports = router

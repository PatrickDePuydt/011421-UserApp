const express = require('express');
const router = express.Router();
const db = require('../models');

// Index - GET /users
router.get('/', (req, res) => {
  console.log(`🏄 ------ GET /users`);
  // Query database for all users
  db.user.findAll()
  .then(users => {
    res.send(users);
  }).catch(error => {
    console.log(`🇨🇩 Error: ${error}`);
    res.send('ERROR'); // Usually make a 404 view to redirect to
  })
});

// New - GET /users/new
router.get('/new', (req, res) => {
  console.log(`⭐ ------ GET /users/new`)
  res.render('users/new');
});

// Create - POST /users
router.post('/', (req, res) => {
  console.log(`🍦 ------ POST /users`)
  console.log(`🛠️ ------ POST /users`, req.body)
  
  db.user.create({
    name: req.body.name,
    age: Math.floor(req.body.age),
    email: req.body.email
  }).then( user => {
    console.log(`🌻 User:`, user.name);
    res.redirect('/users/new');
  }).catch( error => console.log(`❌`, error));

  // db.user.create(req.body);
});

// Show/Details - GET /users/:id
// Edit - GET /users/:id/edit
// Update - PUT /users/:id
// Destory - Delete /users/:id

module.exports = router;
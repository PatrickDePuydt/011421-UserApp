// Once associations are set up, we can use createModel, getModels, setModel, addModel
// Create an associated item with crreateModel

const db = require('./models');

// //  Create a Pet
// db.pet.findOrCreate({
//   where: {
//     name: 'Ballad'
//   },
//   defaults: {
//     species: 'dog',
//     description: 'v cute chocolate lab'
//   }
// }).then(([dog, created]) => {
//   console.log(`${dog.name} ${dog.description} ${created}`)  
// }).catch( error => console.log(`Error: ${error}`));


// db.user.findOne()
// .then( user => {
//   console.log(`🐕 Adding pet to ${user.name}`);
//   user.createPet({
//   // The createPet() method comes from the pet model
//     name: 'Spot',
//     species: 'dog',
//     description: 'loves live with their family'
//   }).then(createdPet => {
//     console.log(`${user.name} just adopted their pet ${createdPet.species} ${createdPet.name}`)
//   });
// });

// Load Associated items into `getPet`
// db.user.findByPk(2)
// .then ( user => {
//   // Load pets for this user
//   user.getPets()
//   .then( pets => {
//     console.log(`🚀 pets:`, pets)
//   }).catch(error => {
//     console.log(`❌3: error`, error);
//   });
// });

// Eager Loading
// db.users.findAll({
//   // Where clause
//   where: {
//     name: 'Steven Peters'
//   },
//   include: [
//     // Models that we want to include
//     db.pet
//   ]
// });

db.user.findAll({
  include: [db.pet]
}).then(users => {
  users.map( user => {
    console.log(`🦄 Users: ${user.name}'s pets`);
    
    user.pets.map( pet => {
      console.log(`😹 Pet:`, pet)
    })
  })
});
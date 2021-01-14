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


db.user.findOne()
.then( user => {
  console.log(`🐕 Adding pet to ${user.name}`);
  user.createPet({
  // The createPet() method comes from the pet model
    name: 'Spot',
    species: 'dog',
    description: 'loves live with their family'
  }).then(createdPet => {
    console.log(`${user.name} just adopted their pet ${createdPet.species} ${createdPet.name}`)
  });
});
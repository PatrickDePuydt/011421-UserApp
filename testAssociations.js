// Once associations are set up, we can use createModel, getModels, setModel, addModel
// Create an associated item with crreateModel

const db = require('./models');

//  Create a Pet
db.pet.findOrCreate({
  where: {
    name: 'Ballad'
  },
  defaults: {
    species: 'dog',
    description: 'v cute chocolate lab'
  }
}).then(([dog, created]) => {
  console.log(`${dog.name} ${dog.description} ${created}`)  
}).catch( error => console.log(`Error: ${error}`));

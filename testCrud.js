// ------------------------ Get all our models
const db = require('./models'); // individual user

// ------------------------ Create
// db.user.create({
//   name: 'Steve Peters',
//   age: 45,
//   email: 'email@email.com'
// }).then(newUser => {
//   // Create promise returns a new row of data that has been created

//   // Otherwise it throws an error
//   console.log(newUser);
  
//   // Terminate the node process at this point is it doens't just time out
//   process.exit();
// }).catch(error => {
//   console.log(`❌ Error: `, error);
// });

// ------------------------ Read

// db.user.findOne({
//   where: {
//     name: 'Steve Peters'
//   }
// }).then( user => {
//   console.log(`✅ User: `, user);
// }).catch( error => console.log(`Error: `, error));

// db.user.findOrCreate({
//   where: {
//     name: 'Brandi Butler'
//   },
//   defaults: {
//     email: 'brandi@williams.com',
//     age: 21
//   }
// }).then(([user, created]) => {
//   console.log(`🏎️ ${user.name} was created: ${created}`);
//   process.exit()
// }).catch( error => console.log(error));

// ------------------------ Update
// db.user.update({
//   name: 'Steven PETERS',
//   age: 100
// }, {
//   where: {
//     id: 1
//   }
// }).then( numberOfRowsUpdated => {
//  console.log(` 🍩numberOfRowsUpdated`, numberOfRowsUpdated); 
// }).catch(error => console.log(`🛩️ error: `, error));


// ------------------------ Delete

// db.user.destroy({
//   where: {
//     name: 'Brian Hague'
//   }
// }).then(numRowsDeleted => {
//   console.log(`🥟 rows deleted:`, numRowsDeleted);
// }).catch( error => console.log(`Error`, error));


let firstUser;

db.user.findByPk(1)
.then( user => {
  firstUser = user;
  console.log(`🍨 first user is ${firstUser.name}`);
}).catch( error => console.log(error));

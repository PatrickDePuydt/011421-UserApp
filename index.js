// Requires
const express = require('express');
const methodOverride = require('method-override');
const layouts = require('express-ejs-layouts');

// App setup
const app = express();
// View Setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(layouts);
// Accepting Restful form data
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Default Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.use('/users', require('./routes/user_controller'));

// app.get('/*', (req, res) => {
//   res.send('404');
// });

app.listen(process.env.PORT || 8000, () => console.log(`🧶 Listening at Port: ${process.env.PORT || 8000} 🎧`));
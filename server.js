// putting in dependencies
const express = require('express'); // require Express.js

// routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// set port for Heroku app to run through 3001 instead of default 80
const PORT = process.env.PORT || 3001;

// setting up the server
const app = express();

// direction to access public folder data
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());
// middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Setting up the server: listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
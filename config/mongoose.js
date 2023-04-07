require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
console.log('thamitha', process.env.CONNECTION_STRING);
let CONNECTION_STRING = process.env.CONNECTION_STRING;

//connect to the database
mongoose
  .connect(CONNECTION_STRING, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log(`connection successful `);
  })
  .catch((err) => {
    console.log(`error connecting to database`, err);
  });

// acquire connection (to check if its successful)
// const db = mongoose.connection;

// db.on('error', console.e/rror.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;

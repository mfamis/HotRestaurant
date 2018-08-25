// Dependencies
// =======================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

// Restaurant arrays (DATA)
// =============================================================
var restaurants = [{
  name: "John",
  phoneNumber: 1231231234,
  email: "jfdls@lfdjfd.com",
  uniqueId: 24
// },
 //{
//   name: "John",
//   phoneNumber: 1231231234,
//   email: "jfdls@lfdjfd.com",
//   uniqueId: 24
// }, {
//   name: "John",
//   phoneNumber: 1231231234,
//   email: "jfdls@lfdjfd.com",
//   uniqueId: 24
// }, {
//   name: "John",
//   phoneNumber: 1231231234,
//   email: "jfdls@lfdjfd.com",
//   uniqueId: 24
// }, {
//   name: "John",
//   phoneNumber: 1231231234,
//   email: "jfdls@lfdjfd.com",
//   uniqueId: 24
}];

var waitlist = [{
  // name: "Jasmine",
  // phoneNumber: 1231231234,
  // email: "jfdls@lfdjfd.com",
  // uniqueId: 24
}];

var count = [{
  homePage: 0
},
{
  reservePage: 0
},
{
  tablesPage: 0
}]

var hasReservation = false;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
  count.homePage++;
})

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
  count.reservePage++;
})

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
  count.tablesPage++;

})

app.get('/api/count', function (req, res) {
  res.json(count)
})

app.get('/api/tables', function (req, res) {
  return res.json(restaurants);
})

app.get('/api/waitlist', function (req, res) {
  console.log("pulling from");
  return res.json(waitlist);
})

app.post('/reserve', function (req, res) {

  var reservation = req.body
  console.log(reservation);
  console.log(reservation.phoneNumber);

  if (restaurants.length == 5) {
    waitlist.push(reservation)
    console.log(waitlist);
    return res.json({hasReservation: false});
    
  } else {
    restaurants.push(reservation);
    console.log(restaurants);
    return res.json({hasReservation: true});
  }

  res.json(reservation)
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
// Dependencies
// =======================================================
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Sets up the Express App
// =============================================================
var app = express()
var PORT = 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Star Wars Characters (DATA)
// =============================================================
var restaurants = [
  {
    routeName: 'greg',
    name: 'Greg',
    phoneNumber: 7078231222,
    email: 'ljfd@gmail.com',
    uniqueId: 24
  },
  {
    routeName: 'pauly',
    name: 'Pauly',
    phoneNumber: 7073242354,
    email: 'ljfd@gmail.com',
    uniqueId: 23
  },
  {
    routeName: 'john',
    name: 'John',
    phoneNumber: 7078324322,
    email: 'd@gmail.com',
    uniqueId: 26
  },
  {
    routeName: 'emily',
    name: 'Emily',
    phoneNumber: 7078231334,
    email: 'emily.d@gmail.com',
    uniqueId: 29
  },
  {
    routeName: 'sarah',
    name: 'Sarah',
    phoneNumber: 7078231222,
    email: 'sarah@gmail.com',
    uniqueId: 40
  }
]

var waitlist = [
  // {
  //     // routeName: '',
  //     // name: '',
  //     // phoneNumber: int,
  //     // email: '',
  //     // uniqueId: int
  // }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'))
})

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'))
})

app.get('/tables', function (req, res) {
  return res.json(restaurants)
})

app.post('/reserve', function (req, res) {
  var reservation = req.body

  if (restaurants.length < 6) {
    restaurants.push(reservation)
  } else {
    waitlist.push(reservation)
  }

  res.json(reservation)
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})

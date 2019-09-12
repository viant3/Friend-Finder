// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require('./app/data/friends.js')
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  friends (DATA)
// =============================================================


// Routes
// =============================================================


require('./app/routing/apiroutes.js')(app);
require('./app/routing/htmlroutes.js')(app)

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;



  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

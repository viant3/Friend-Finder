// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

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


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Basic route that sends the user first to the AJAX Page


// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// app.get("/allchars", function(req, res) {
//   res.sendFile(path.join(__dirname, "allchars.html"));
// });

// Displays all friends


// Displays a single character, or returns false
// app.get("/api/friends/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].routeName) {
//       return res.json(friends[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newFriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

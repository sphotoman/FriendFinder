   // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

   // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var friendArray = require("../data/friends");

// ================================================
// ROUTING
// =================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log("im hitting this route");
    console.log(req.body);
    var totalsArray = [];
    for (var i =0; i<friendArray.length; i++) {
      var friend = friendArray[i];
      var total = 0
      for (var j =0; j<friend.scores.length; j++){
        var diff = Math.abs(req.body.scores[j]-friend.scores[j]);
        total = total + diff;
      }
      totalsArray.push(total);
    }
    var match
    for (var i =0; i<totalsArray.length; i++) {
      var highest = 0;
        if (highest < totalArray[i]) {
            match = i
        }
      }
console.log (friendArray[i]);
    



    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
   



    // if (friendArray.length > 0) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   friendArray.push(req.body);
    //   res.json(false);
    // }
  });

};

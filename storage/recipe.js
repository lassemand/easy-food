var MongoClient = require('mongodb').MongoClient;

var ingredientCollection;

MongoClient.connect("mongodb://localhost:27017/easyfood", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
    else {
        console.log("Error connecting");
    }
});


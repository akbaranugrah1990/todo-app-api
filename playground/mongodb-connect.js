const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server ");
  }

  var db = client.db("TodoApp");

  console.log("Connected to MongoDB server");

  client.close();
});

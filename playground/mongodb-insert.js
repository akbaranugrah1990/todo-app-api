const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server ");
  }

  var db = client.db("TodoApp");

  console.log("Connected to MongoDB server");

  db.collection("Todos").insertOne(
    {
      text: "Something Task2",
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todos", err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  client.close();
});

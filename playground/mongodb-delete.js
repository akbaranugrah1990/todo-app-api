const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server ");
  }

  const db = client.db("TodoApp");

  //Delete Many
  // db
  //   .collection("Todos")
  //   .deleteMany({ completed: true })
  //   .then(result => {
  //     console.log(result);
  //   });

  //DeleteOne
  // db
  //   .collection("Todos")
  //   .deleteOne({ completed: true })
  //   .then(result => {
  //     console.log(result);
  //   });

  //FindOneAndDelete
  // db
  //   .collection("Todos")
  //   .findOneAndDelete({ completed: true })
  //   .then(result => {
  //     console.log(result);
  //   });

  //FindOneAndDelete by ObjectID
  db
    .collection("Todos")
    .findOneAndDelete({ _id: new ObjectID("5a3b257b81b2c91738274aa4") })
    .then(results => {
      console.log(JSON.stringify(results, undefined, 2));
    });

  console.log("Connected to MongoDB server");

  client.close();
});

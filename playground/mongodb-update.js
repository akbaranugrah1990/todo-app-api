const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server ");
  }

  const db = client.db("TodoApp");

  //FindOneAndUpdate
  // db
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID("5a3b2805be278e1b6cd8f687")
  //     },
  //     {
  //       $set: {
  //         text: "Test Updated"
  //       }
  //     },
  //     { returnOriginal: false }
  //   )
  //   .then(result => console.log(result));

  //FindOneAndUpdate with increment
  db
    .collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5a3b364b79e6d0cad85fe5c2")
      },
      {
        $set: {
          text: "Test update increment"
        },
        $inc: {
          counter: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
    });

  console.log("Connected to MongoDB server");

  client.close();
});

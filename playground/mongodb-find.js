const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server ");
  }

  const db = client.db("TodoApp");

  //FETCH ALL DATA
  // db
  //   .collection("Todos")
  //   .find()
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("unable to fetch todos", err);
  //     }
  //   );

  //FETCH DATA WITH FIND BY COMPLETED
  // db
  //   .collection("Todos")
  //   .find({ completed: true })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  //FETCH DATA WITH FIND BY ID
  // db
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("5a3b2805be278e1b6cd8f687") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fecth todos by ID");
  //     }
  //   );

  //FETCH TODOS WITH COUNT DATA
  db
    .collection("Todos")
    .find()
    .count()
    .then(
      docs => {
        console.log(`Todos count: ${docs}`);
      },
      err => {
        console.log("Unable to fecth todos by ID");
      }
    );

  console.log("Connected to MongoDB server");

  client.close();
});

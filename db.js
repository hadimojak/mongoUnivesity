const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.qa8jvec.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// client
//   .connect()
//   .then((connection) => {
//     console.log("connected to mongo");
//     return connection;
//   })
//   .then(async (connection) => {
//     const pingResult = await connection.db("admin").command({ ping: 1 });
//     console.log(pingResult);
//     if (pingResult.OK === 1) {
//       console.log("You successfully connected to MongoDB!");
//     }
//     return connection;
//   })
//   .then(async (db) => await db.close())
//   .catch((err) => console.log(err));

async function run() {
  try {
    const database = client.db("sample_airbnb");
    const movies = database.collection("listingsAndReviews");
    // query for movies that have a runtime less than 15 minutes

    const cursor = movies.find(
      { bedrooms: { $eq: 1 } },
      { projection: { _id: 0, name: 1 } }
    );
    // print a message if no documents were found
    // for await (const doc of cursor) {
    //   console.log(doc);
    // }

    console.log(cursor);
  } finally {
    await client.close();
  }
}
run();

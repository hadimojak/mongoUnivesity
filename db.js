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

const connect = async () => {
  try {
    await client.connect();
    const pingResult = await client.db("admin").command({ ping: 1 });
    if (pingResult.ok === 1) {
      console.log("You successfully connected to MongoDB!");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

connect();

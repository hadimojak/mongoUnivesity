// Require MongoDB language driver
const { MongoClient } = require("mongodb")

// Set the value of uri to your Atlas connection string.
const uri = 'mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.qa8jvec.mongodb.net'

// Create the MongoClient instance
const client = new MongoClient(uri)

// Establishes a connection to the database using the MongoClient instance
const main = async () => {
   try {
      await client.connect()
      console.log("Connected to MongoDB Atlas!")
      // list out all the databases in the cluster
      const dbs = await client.db().admin().listDatabases()
      console.table(dbs.databases)
   } catch (error) {
      console.error(error)
   } finally {
      await client.close()
   }
}

// Run the `main` function, catch any errors and finally close the connection when the main function is done
main()
   .catch((err) => console.log(err))
   .finally(() => client.close())
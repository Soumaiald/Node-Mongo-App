import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://soumaia:soumald7991@cluster0.ewlek6x.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training")
// let collection = await db.collection("posts")
// let result = await collection.find({title: "Bill of Rights"}).limit(1).toArray()

//console.log(result)

export default db;
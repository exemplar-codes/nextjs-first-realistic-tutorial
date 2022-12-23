import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env["MONGODB_DB_USERNAME"]}:${process.env["MONGODB_DB_PASSWORD"]}@cluster0.3beczsg.mongodb.net/?retryWrites=true&w=majority`
    ); // connect to the DB

    const db = client.db();

    // collection (aka table, traditionally)
    const meetupsCollection = db.collection("meetups"); // collection named 'meetups', will be created if not found

    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    // assume no errors will occur, for the sake of simple code
    // console.log(result);

    client.close(); // close the connection

    res.status(201).json({ message: "Meetup inserted" });
  } else
    res.status(404).json({
      message: `Endpoint does not accept ${req.method} requests`,
    });
}

export default handler;

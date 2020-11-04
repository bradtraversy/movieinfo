const MongoClient = require('mongodb');

const connectionString = "mongodb+srv://<user>:<pass>@lmsdev.fr6mr.mongodb.net/<dbname>?retryWrites=true&w=majority";
const connectToDB = async () => MongoClient.connect(connectionString, { useUnifiedTopology: true });

const getMovies = async () => {
    const client = await connectToDB();
    const db = client.db('OMDB');

    const response = await db.collection('movies').find({});
    return response.toArray();
}

module.exports = {
    getMovies
}

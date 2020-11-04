const MongoClient = require('mongodb');

const connectionString = "mongodb+srv://<username>:<password>@cluster0.r5bhq.mongodb.net?<db>retryWrites=true&w=majority";
const connectToDB = async () => MongoClient.connect(connectionString, { useUnifiedTopology: true });

const getMovies = async () => {

    try{
        const client = await connectToDB();
        const db = await client.db('omdb');
        const response = await db.collection('movies').find({});
        return response.toArray();
        
    }catch(error){
        console.log("error");
    }
    
}

const updateMovies = async (request) => {
    try{
        const client = await connectToDB();
        const db = await client.db('omdb');
        const response = await db.collection('movies').insertOne({request})
        const status = response.insertedId ? 'true' : 'false';
        return status;
    }catch(error){
        console.log('error: ', error);

    }
}

module.exports = {
    getMovies,
    updateMovies
}

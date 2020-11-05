const mongodb=require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionString='mongodb+srv://rajeshkumarveer:rajesh23@cluster0.plwyv.mongodb.net/omdb?retryWrites=true&w=majority';

const connectToDb = async()=>MongoClient.connect(connectionString, {useUnifiedTopology:true} );
console.log('connectToDb', connectToDb);

const getMovies = async ()=>{
    try{
        const client =await connectToDb();
        const db=client.db("omdb");
        const response = await db.collection('movies').find({});
        console.log("Get sucess");
        return response.toArray();
    }
    catch(error){
        console.log(" Error: ",error);
    }
}

const getMovieWithId = async (id)=>{
    try{
        const client =await connectToDb();
        const db=client.db("omdb");
        const response = await db.collection('movies').findOne( {imdbID: id} );
        console.log("Get sucess");
        return response;
    }
    catch(error){
        console.log(" Error: ",error);
    }
}

const postMovies = async (obj , res)=>{
    try{
        console.log(obj);
        const client =await connectToDb();
        const db=client.db("omdb");
        const response = await db.collection('movies').insertOne(obj);
        console.log("Post success");
        return true;
    }catch(err){
        console.log("Error : ",err);
    }

}

const putMovies = async (req , res)=>{
    try{
        //console.log("Request object:",req);
        //const olddata = await getMovieWithId(req.id.id);
        const newdata = req.body; 
        // console.log("OldData", olddata);
        // console.log("NewData", newdata);
        const client =await connectToDb();
        const db=client.db("omdb");
        const response = await db.collection('movies').updateOne(req.olddata, {$set:req.newdata} );
        console.log("Put success");
        return true;
    }
    catch(err){
        console.log("Error : ",err);
    }
}

const deleteMovies = async (req , res)=>{
    try{
        //console.log("Request object:",req);
        const client =await connectToDb();
        const db=client.db("omdb");
        const response = await db.collection('movies').deleteOne(req);
        console.log("Delete success");
        return true;
    }
    catch(err){
        console.log("Error : ",err);
    }
}


module.exports={getMovies,postMovies,putMovies,getMovieWithId,deleteMovies}
const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const {getMovies,postMovies,putMovies,getMovieWithId,deleteMovies}= require('./server/movie');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use(express.static('public'));


app.get('/movies', async(req,res)=>{
    const movielist= await getMovies();
    console.log("List of movies",movielist);
    res.send(movielist);
})


app.post('/movies', async(req,res)=>{
    const movie = await postMovies(req.body);
    res.end();
})

app.put('/movies/:id',async(req,res)=>{
    const olddata = await getMovieWithId(req.params.id);
    const newdata=req.body;
    console.log(olddata);
    console.log(newdata);
    const movie = await putMovies({olddata,newdata});
    res.end();
})
app.delete('/movies/:id',async(req,res)=>{
    //console.log(req.param);
    const toDeletedata = await getMovieWithId(req.param.id);
    //console.log(toDeletedata);
    const Deleteddata = await deleteMovies(toDeletedata);
    res.end();
})

app.get('/movies/:id', async(req,res)=>{
    const movie= await getMovieWithId(req.params.id);
    console.log("Movie : ",movie);
    res.send(movie);
})

app.listen(3000, function() {
    console.log('listening on 3000');
})
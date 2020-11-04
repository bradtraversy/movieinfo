const express = require('express');
const bodyParser = require('body-parser');  
const { getMovies, updateMovies } = require('./services/movies');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());



app.get('/movies', async (req, res) => {
    const movieList = await getMovies();
    console.log('movieList: ', movieList);
    res.send(movieList);
});

app.post('/movie', async (req, res) => {
    try{
        const request = res.body;
        const status = await updateMovies(request);
        res.json(status);

    }catch(error){
        console.log('error: ', error);
        res.send(error);
    }
});

app.put('/movies/:id', async (req, res) => {
    try{
        const id = req.params.id;
        console.log('id: ', id);
    }catch(error){

    }
});

app.delete('/movies/:id', async (req, res) => {
    
});

app.listen(3000, function() {
    console.log('listening on 3000');
})
const express = require('express');
const { getMovies } = require('./services/movies');
const app = express();

app.use(express.static('public'));

app.get('/movies', async (req, res) => {
    const movieList = await getMovies();
    res.send(movieList);
});

app.post('/movies', async (req, res) => {

    
});

app.put('/movies/:id', async (req, res) => {
    
});

app.delete('/movies/:id', async (req, res) => {
    
});

app.listen(3000, function() {
    console.log('listening on 3000');
})
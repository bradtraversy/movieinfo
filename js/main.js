window.addEventListener('load', function onReady(){
    
  loadMovies();

  document.getElementById('search-form').addEventListener('submit', function onSearchSubmit(){
    // Step 1: Get the form value

    /**
     * Step 2: Invoke the API - http://www.omdbapi.com/?apikey=<api-key> and retrieve the post list
     *         After the response returned - update the details into the div ( with "movies" id ) 
     * */ 
  });

});


function loadMovies(){

  var movies = [
    {
      "Title": "Inside Out",
      "Year": "2015",
      "imdbID": "tt2096673",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg"
    },
    {
      "Title": "Inside Man",
      "Year": "2006",
      "imdbID": "tt0454848",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjc4MjA2ZDgtOGY3YS00NDYzLTlmNTEtYWMxMzcwZjgzYWNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Inside Llewyn Davis",
      "Year": "2013",
      "imdbID": "tt2042568",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxNjcyNDQxM15BMl5BanBnXkFtZTgwNzU2NDA0MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Sea Inside",
      "Year": "2004",
      "imdbID": "tt0369702",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NDk2NjgwMV5BMl5BanBnXkFtZTYwMTgyMzA3._V1_SX300.jpg"
    },
    {
      "Title": "Inside Job",
      "Year": "2010",
      "imdbID": "tt1645089",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3MjkyODA2Nl5BMl5BanBnXkFtZTcwNzQxMTU4Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Inside",
      "Year": "2007",
      "imdbID": "tt0856288",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTgyODRlNjQtMGZhNS00ZTA3LTgyNjgtNDYwNWM1ZDI0ODMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Devil Inside",
      "Year": "2012",
      "imdbID": "tt1560985",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTg1MTk0NF5BMl5BanBnXkFtZTcwMTA5NTI5Ng@@._V1_SX300.jpg"
    },
    {
      "Title": "The Killer Inside Me",
      "Year": "2010",
      "imdbID": "tt0954947",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyOTIwMTU5MV5BMl5BanBnXkFtZTcwNDY5NjA1Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Inside Look: The People v. O.J. Simpson - American Crime Story",
      "Year": "2016",
      "imdbID": "tt6205862",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTgyZmYzM2YtZDQ3YS00ODJhLWIyYzEtN2QzYjA5YTZjZGM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Inside No. 9",
      "Year": "2014–",
      "imdbID": "tt2674806",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTY1Y2UzMmItZDgzMC00Nzc1LTk3ZDAtYWM4MGFhNzdkYzU1XkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_SX300.jpg"
    }
  ];
  
  var output = '';

  movies.forEach(function(movie){
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
        </div>
      </div>
    `;
  })
  
  document.getElementById('movies').innerHTML = output;
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}
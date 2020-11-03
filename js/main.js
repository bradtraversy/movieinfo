$(document).ready(() => {
  loadMovies();
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


function loadMovies(){

  const movies = [
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
  ]
  
  let output = '';
  $.each(movies, (index, movie) => {
    output += `
      <div class="movieClass">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h4 class="movieTitle" >${movie.Title}</h4>
          <a class="viewDetails" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
        </div>
      </div>
    `;
  });
  $('#movies').html(output);
}

function getMovies(){
  // axios.get('http://www.omdbapi.com/?apikey=e54db17c&s='+searchText)
  //   .then((response) => {
  //     console.log(response);
  //     let movies = response.data.Search;
  //     let output = '';
      
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
//   let output = '';
//   $.each(movies, (index, movie) => {
//     output += `
//       <div class="col-md-3">
//         <div class="well text-center">
//           <img src="${movie.Poster}">
//           <h5>${movie.Title}</h5>
//           <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//         </div>
//       </div>
//     `;
//   });
//  console.log(output);
//   $('#movies').html(output);
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=e54db17c&i='+movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
        <div class="row">
          <div class="movieImage">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <h2 id="movieTitle">${movie.Title}</h2>
          <div class="movieDetails">
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <div class="">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

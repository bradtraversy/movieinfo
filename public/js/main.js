var movie_lists;
document.addEventListener('DOMContentLoaded', function onReady(){
 
  fetchMovies().then(()=>{
    loadMovies(movie_lists);
  })

  document.getElementById('search-form').addEventListener("submit", function onSearchSubmit(e){
    e.preventDefault();
    const title = document.getElementById('search-text').value;
    fetchMovies().then(()=>{
      const filterMovie = movie_lists.filter(ele=>ele.Title.toLowerCase().includes(title.toLowerCase()));
      loadMovies(filterMovie);
    })
  });

  

});

const fetchMovies = () => {
  const API_BASE = "http://localhost:3000/movies";
  return fetch(API_BASE)
    .then((res)=>res.json())
    .then((Search)=> {
      console.log("Fetch start");
      movie_lists=Search;
    })
    .catch(err=>console.log(err));
};

function loadMovies(movies){

  //console.log(movies);
  var output = '';
  if(movies.length==0){
    output += `
      <div class="container">
        <div>
          <h2 class="movie-title" >Movies does't found...</h2>
        </div>
      </div>
    `;
  }else{
    movies.forEach(function(movie){
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <div style="display:flex;">
            <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
            <div id="favorites">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 172 172" style=" fill:#000000;display:inline-block;" id="fav1">
              <g transform="translate(4.73,4.73) scale(0.945,0.945)">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                  <g stroke="#ce2424" stroke-width="10" stroke-linejoin="round">
                    <path d="M80.85075,143.8565c-23.63925,-18.6835 -75.47575,-65.00525 -75.47575,-90.56875c0,-20.4895 17.06025,-37.16275 38.04425,-37.16275c13.46975,0 25.671,6.78325 32.62625,18.146l4.5795,7.47125l4.5795,-7.482c6.966,-11.352 19.1565,-18.13525 32.62625,-18.13525c20.97325,0 38.04425,16.67325 38.04425,37.16275c0,36.421 -60.40425,80.44225 -75.02425,90.56875z" fill="#111111"></path>
                    <path d="M117.8415,21.5c-11.5885,0 -22.0805,5.8265 -28.04675,15.57675l-9.16975,14.964l-9.16975,-14.964c-5.977,-9.75025 -16.45825,-15.57675 -28.04675,-15.57675c-18.00625,0 -32.6585,14.2545 -32.6585,31.78775c0,19.33925 39.2805,58.92075 70.33725,83.90375c23.994,-16.942 69.41275,-54.954 69.41275,-83.90375c0,-17.53325 -14.65225,-31.78775 -32.6585,-31.78775M117.8415,10.75c23.9725,0 43.4085,19.03825 43.4085,42.53775c0,44.6125 -80.625,97.21225 -80.625,97.21225c0,0 -80.625,-61.95225 -80.625,-97.21225c0,-23.4995 19.436,-42.53775 43.4085,-42.53775c15.824,0 29.627,8.3205 37.2165,20.7045c7.5895,-12.384 21.3925,-20.7045 37.2165,-20.7045z" fill="#d92121"></path>
                  </g>
                  <path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1" stroke-linejoin="miter"></path>
                  <g stroke="none" stroke-width="1" stroke-linejoin="miter" class="color_change" id='${movie.imdbID}' onclick="toggle('${movie.imdbID}')"  isFav='${movie.favourite!=null&&movie.favourite==true?true:false}' ><path id="color_pick" d="M80.85075,143.8565c-23.63925,-18.6835 -75.47575,-65.00525 -75.47575,-90.56875c0,-20.4895 17.06025,-37.16275 38.04425,-37.16275c13.46975,0 25.671,6.78325 32.62625,18.146l4.5795,7.47125l4.5795,-7.482c6.966,-11.352 19.1565,-18.13525 32.62625,-18.13525c20.97325,0 38.04425,16.67325 38.04425,37.16275c0,36.421 -60.40425,80.44225 -75.02425,90.56875z" fill='${movie.favourite!=null&&movie.favourite==true?"#D92121":"#060709"}'></path></g>
                </g>
            </svg>
            </div>
          </div>

        </div>
      </div>
    `;
  })
  }
  document.getElementById('movies').innerHTML = output;
  
}

function toggle(id){
  colorChange(document.getElementById(id));
  favourite(document.getElementById(id),id);
}

function colorChange(e){
  const black=`<path id="color_pick" d="M80.85075,143.8565c-23.63925,-18.6835 -75.47575,-65.00525 -75.47575,-90.56875c0,-20.4895 17.06025,-37.16275 38.04425,-37.16275c13.46975,0 25.671,6.78325 32.62625,18.146l4.5795,7.47125l4.5795,-7.482c6.966,-11.352 19.1565,-18.13525 32.62625,-18.13525c20.97325,0 38.04425,16.67325 38.04425,37.16275c0,36.421 -60.40425,80.44225 -75.02425,90.56875z" fill="#060709"></path>`;
  const red=  `<path id="color_pick" d="M80.85075,143.8565c-23.63925,-18.6835 -75.47575,-65.00525 -75.47575,-90.56875c0,-20.4895 17.06025,-37.16275 38.04425,-37.16275c13.46975,0 25.671,6.78325 32.62625,18.146l4.5795,7.47125l4.5795,-7.482c6.966,-11.352 19.1565,-18.13525 32.62625,-18.13525c20.97325,0 38.04425,16.67325 38.04425,37.16275c0,36.421 -60.40425,80.44225 -75.02425,90.56875z" fill="#D92121"></path>`;
  console.log(e);
  console.log(e.innerHTML=== black);
  if(e.innerHTML=== black){
    e.innerHTML=red;
  }
  else{
    e.innerHTML=black;
  }
  
}
function favourite(e,id){
  var isfav=e.getAttribute("isfav")=="false";
  fetch(`/movies/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({favourite: isfav,}),
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'secret'
    }
  });
  if(isfav){
    e.setAttribute("isfav",true);
  }else{
    e.setAttribute("isfav",false);
  }
  console.log(e.getAttribute("isfav"));
}
function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}
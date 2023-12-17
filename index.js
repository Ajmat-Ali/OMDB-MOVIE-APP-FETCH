function fetchMovie(movie) {
  // let Sbtn = document.getElementById("searchBtn");
  fetch(`https://www.omdbapi.com/?apikey=e9868d94&t=${movie}`)
    .then((res) => res.json())
    .then((moviesData) => {
      console.log(moviesData);
      displayMovies(moviesData);
    });
}
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let movie = document.getElementById("searchMovie");
  let m = movie.value;
  fetchMovie(m);
});

function displayMovies(d) {
  let data = `
        <div id='card'>
            <img src='${d.Poster} alt='${d.Title}'/>
            <p class='title'>${d.Title}</p>
            <p class = 'actor'> ${d.Actors}</p>
            <div id='release-duration'>
                <span class='released'> Date : ${d.Released} </span>
                <span class='duration'> Duration :${d.Runtime} </span>
            </div>
            <div id='release-duration'>
                <span class='language'> Language : ${d.Language} </span>
                <span class='country'> Country : ${d.Country} </span>
            </div>
            <div class='award'>
              <p class='awards'> Awards</p>
              <p class='awards'> ${d.Awards}</p>
            </div>
        </div>
    `;
  document.querySelector("#container").innerHTML = data;
}

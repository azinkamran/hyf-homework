

function loadMovies() {
  fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {
      console.log(movies);
      badMovies(movies)
    });
}

function badMovies(data){
  const bad =data.filter(movie => movie.rating < 5) 
  const badMoviesScince2000 = bad.filter(movie => movie.year>2000)
  const badMovieTile = badMoviesScince2000.map(movie => movie.title)

  console.log("bad movies",bad)
  console.log("bad from 2000",badMoviesScince2000)
  console.log("bad title",badMovieTile)
}
loadMovies();


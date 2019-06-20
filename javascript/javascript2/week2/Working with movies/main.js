const allMovies = getAllMovies();
// {
//   title: "'71",
//   year: 2014,
//   rating: 7.2,
//   votes: 41702,
//   running_times: 5940
// }

console.log(allMovies);

//movies with a short title
const shortMovieTitle = allMovies
  .filter(movie => movie.title.length <= 2)
  .map(movie => movie.title);

console.log("Movies with short titles are: " + shortMovieTitle);

//long movie titles
const longMovieTitle = allMovies
  .filter(movie => movie.title.length > 60)
  .map(movie => movie.title);

console.log("Movies with long titles are: " + longMovieTitle);

//Count the number of movies made between 1980-1989 (including both the years)
const moviesFrom80s = allMovies
  .filter(movie => movie.year >= 1980 && movie.year <= 1989)
  .map(movie => movie.title);

console.log(moviesFrom80s);

//Create a new array that has an extra key called tag. The tag is based on the
//                       rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const bad = allMovies.filter(movie => movie.rating < 4);

const average = allMovies.filter(
  movie => movie.rating < 7 && movie.rating >= 4
);

const good = allMovies.filter(movie => movie.rating >= 7);

bad.forEach(item => (item.tag = "bad"));
console.log(bad);

average.forEach(item => (item.tag = "average"));
console.log(average);

good.forEach(item => (item.tag = "good"));
console.log(good);

//rated higher than 6. Now map
const higherThan6 = allMovies
  .filter(movie => movie.rating >= 7)
  .map(movie => movie.title);

console.log(higherThan6);

//Count the total number of movies Surfer, Alien or Benjamin

//first solution

 const containsName = allMovies.filter(
  movie =>
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjamin")
);
console.log(containsName)
console.log(
  "Movie that contains suffer, allien and bejamin are : " + containsName.length
);

//second solution

// const containsName = allMovies.map(movie => movie.title)
// let counterContainer
// let counter=0
// for(let i=0;i<containsName.length;i++){
// let separateContain =splitIntoWords(containsName[i])
// //console.log(separateContain)
//  counterContainer = separateContain.filter(
//     movie =>
//       movie.toLowerCase().includes("surfer") ||
//       movie.toLowerCase().includes("alien") ||
//       movie.toLowerCase().includes("benjamin")
//   );
//   if(counterContainer.length){
//     counter +=1
//   }
// }
// console.log(counter)

//word in the title is duplicated

const duplicatedWordInTitle = allMovies
    .map(movie => movie.title)


let titleSeparate;
let duplArray;

function splitIntoWords(str) {
  return str.toLowerCase().split(/[^a-z0-9+]+/gi);
}


for(let i=0;i<duplicatedWordInTitle.length;i++){
  titleSeparate = duplicatedWordInTitle[i]; 
  let titleWords = splitIntoWords(titleSeparate); 
  //console.log(titleWords, titleSeparate.split(' '), (new Set(titleWords)).size, (new Set(titleSeparate.split(' '))).size);
  let findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  duplArray = findDuplicates(titleWords);
  
  if (duplArray.length) {
    console.log("duplicated array is : " + duplArray);
  }
}

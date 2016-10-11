// var movies = require('./movies');
// movies.favMovies = "2";
// console.log(movies.favMovies);
var movies = require('./movies');
var fav = movies();
fav.favMovies = "qwerty2";
console.log("practice2 " + fav.favMovies);
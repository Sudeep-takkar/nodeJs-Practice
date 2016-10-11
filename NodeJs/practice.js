// // /**
// //  * Created by sudeep on 9/10/16.
// //  */
// // var movies = require('./app');
// //
// // console.log(movies.favMovie);
//
// var movies = require('./movies');
// // console.log(movies.favMovies);
var movies = require('./movies');
var fav2 = movies();
fav2.favMovies = "qwerty";
console.log("practice " + fav2.favMovies);
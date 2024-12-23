// Importing with commonjs:

// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils'); // this imports the function from the 'utils.js'
//                                                                           // file and puts it into this constant

// console.log(`Random Number: ${generateRandomNumber()}`); // using the function
// console.log(`Fahrenheit Temperature: ${celsiusToFahrenheit(0)}`); // using the function


// Importing with ES module:

// import { getPosts } from './postController.js';

import getPosts, { getPostsLenght } from './postController.js'; // for a default export

console.log(getPosts());

console.log(`Post Lenght: ${getPostsLenght()}`);
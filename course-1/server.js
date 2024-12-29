// Creating a HTTP Server

import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;     // the port number is picked up from the .env file, where the variable 'PORT' is being iniciated with value 8080
                                   // this only works because the 'package.json' file was changed to run the server utilizing the .env file ' "nodemon --env-file=.env server.js" '

/* 

const server = http.createServer((request, response) => {
    // response.setHeader('Content-Type', 'text/html');    // setting 'Content-Type' to 'text/html'
    // response.setHeader('Content-Type', 'text/plain');   // setting 'Content-Type' to 'text/plain'
    // response.statusCode = 404;                          // turn 'Status Code' into 404 Not Found error


    // The three line above can be written in one line:

    response.writeHead(500, { 'Content-Type': 'application/json' });    // setting 'Content-Type' to receive a JSON object
    response.end(JSON.stringify({ message: 'Server Error' }));          // the JSON object is shown on the screen




    // response.write('Hello World!'); 
    // response.end();

    // The two line above can be written in one line:

    // response.end('Hello World!');




    // Making it a h1 component:

    // response.end('<h1>Hello World!</h1>'); 
});

*/

// Get current path to load files
const __filename = url.fileURLToPath(import.meta.url);   // current file path
const __dirname = path.dirname(__filename);              // current directory path

const server = http.createServer(async (request, response) => {

    try {
        if (request.method === 'GET') {

            let filePath;

            if (request.url === '/hello') {
               filePath = path.join(__dirname, 'public', 'index.html');

            } else if (request.url === '/about') {
               filePath = path.join(__dirname, 'public', 'about.html');

            } else {
                throw new Error('Not Found');
            }

            const data = await fs.readFile(filePath);
            response.setHeader('Content-Type', 'text/html');
            response.write(data);
            response.end();

        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
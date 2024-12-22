// Creating a HTTP Server

import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT; // the port number is picked up from the .env file, where the variable 'PORT' is being iniciated with value 8080
// this only works because the 'package.json' file was changed to run the server utilizing the .env file ' "nodemon --env-file=.env server.js" '

/* 

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html'); // setting 'Content-Type' to 'text/html'
    // res.setHeader('Content-Type', 'text/plain'); // setting 'Content-Type' to 'text/plain'
    // res.statusCode = 404; // turn 'Status Code' into 404 Not Found error


    // The three line above can be written in one line:

    res.writeHead(500, { 'Content-Type': 'application/json' }); // setting 'Content-Type' to receive a JSON object
    res.end(JSON.stringify({ message: 'Server Error' })); // the JSON object is shown on the screen




    // res.write('Hello World!'); 
    // res.end();

    // The two line above can be written in one line:

    // res.end('Hello World!');




    // Making it a h1 component:

    // res.end('<h1>Hello World!</h1>'); 
});

*/

// Get current path
const __filename = url.fileURLToPath(import.meta.url); // current file path
const __dirname = path.dirname(__filename); // current directory path

const server = http.createServer(async (req, res) => {

    try {
        if (req.method === 'GET') {

            let filePath;

            if (req.url === '/') {
               filePath = path.join(__dirname, 'public', 'index.html');

            } else if (req.url === '/about') {
               filePath = path.join(__dirname, 'public', 'about.html');

            } else {
                throw new Error('Not Found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
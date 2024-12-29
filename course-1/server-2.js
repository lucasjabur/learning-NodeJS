import { error } from 'console';
import { createServer } from 'http';

const PORT = process.env.PORT;   // getting the PORT from .env file
const users = [                  // creating array os objects to put the API's users
  {id: 1, name: 'Lucas Jabur'},
  {id: 2, name: 'Daniel Caetano'},
  {id: 3, name: 'Rafael Dias'},
];

const server = createServer((request, response) => { // creating the variable 'server' to start the HTTP Server
  if (request.url === '/api/users' && request.method === 'GET') {   // getting the API's users from 'http://localhost:8000/api/users'
    response.setHeader('Content-Type', 'application/json');         // setting the configuration of the content displayed to 'application/json'
    response.write(JSON.stringify(users));                          // wrtingin on the screen the content (in this case, the users' attributes)
    
  }

  else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'GET') {
    const id = request.url.split('/')[3];
    console.log(id);

    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify(user));
      response.end();
    }

    else {
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 404;
      response.write(JSON.stringify({ message: 'User not found!' }));
      response.end();
    }

    

    // Another way of printing the selected user would be (not ideal, but a more practical way):
    
    // response.setHeader('Content-Type', 'application/json');
    // response.write(JSON.stringify(users[id-1]));
    // response.end();
  }

  else {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 404;
    response.write(JSON.stringify({ message: 'Route not found!' }));
    response.end
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
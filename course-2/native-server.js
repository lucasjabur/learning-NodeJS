// Native HTTP Server creation

import { createServer } from 'node:http' // for working with HTTP servers

// request: it brings the informations from the requests that are being made inside the API
// response: it returns a response to the API's caller

const server = createServer((request, response) => {  
  response.write('ola')
  return response.end()
})

server.listen(8000) // port as a parameter for localhost:8000

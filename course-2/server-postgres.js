// HTTP Server creation using Fastify Framework

import { fastify } from 'fastify'
import { DatabasePostgres } from './db-postgres.js'

const server = fastify()
const db = new DatabasePostgres()

/* route creation usgin HTTP methods:
  - GET (used to receive information)
  - POST (used for creation),
  - PUT (used for modification),
  - DELETE (used for deletion),
  - PATCH (modify a specific information of a resource and not all its data)
*/


// Request Body

// POST http://localhost:3334/videos -> video creation route

server.post('/videos', async (request, reply) => { // reply = response
  
  // destructuring 'const body = request.body' into videos attributes
  const { title, description, duration } = request.body
  
  await db.create({
    title, // the same of 'title: title'. It's called 'short syntax'
    description,
    duration,
  })

  // console.log(db.list())

  return reply.status(201).send() // HTTP status code 201: something was created

})

server.get('/videos', async (request) => {
  
  // implementing 'query parameter'
  const search = request.query.search
  const videos = await db.list(search)

  console.log(search)

  return videos

})

// PUT http://localhost:3334/videos/video_id -> video modification route

server.put('/videos/:id', async (request, reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body

  await db.update(videoId, {
    title,
    description,
    duration,
  })

  return reply.status(204).send // HTTP status code 204: successful reply with no content
})


// DELETE http://localhost:3334/videos/video_id -> video deletion route

server.delete('/videos/:id', async (request, reply) => {
  const videoId = request.params.id

  await db.delete(videoId)

  return reply.status(204).send()
})

server.listen({
  port: 3334,
})
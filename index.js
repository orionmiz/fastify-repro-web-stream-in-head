import Fastify from 'fastify'
import { ReadableStream } from 'node:stream/web'

const fastify = Fastify({
  logger: true
})

fastify.get('/', (request, reply) => {
  reply.send(ReadableStream.from('I am a web stream!'))
})

fastify.setErrorHandler((error, request, reply) => {
  console.error(error)
})

fastify.inject({
  method: 'HEAD',
  url: '/',
})
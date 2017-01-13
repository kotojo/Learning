const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 4000 })

server.route([{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello World!')
  }
}, {
  method: 'GET',
  path: '/json',
  handler: (request, reply) => {
    reply({ hello: 'World' })
  }
}])


server.register({
  register: require('good'),
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: { response: '*' }
    }]
  }
}, (err) => {
  if (err) {
    throw err
  }

  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('Server running at: ', server.info.uri)
  })
})

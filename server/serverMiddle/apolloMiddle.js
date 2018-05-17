const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')

const apolloMiddle = (server, schema) =>
  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(async () => {
      return {
        schema
        // context: { user: req.user },
        // tracing: true,
        // cacheControl: true
      }
    })
  )

const apolloMiddleInterFace = server => {
  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  )
}

module.exports = { apolloMiddle, apolloMiddleInterFace }
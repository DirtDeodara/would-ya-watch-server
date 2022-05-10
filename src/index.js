const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")
const EventAPI = require("./datasources/event-api")
const mongoose = require("mongoose")
require("dotenv").config()

const { MongoClient, ServerApiVersion } = require("mongodb")
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})
client.connect(async (err) => {
  // const collection = client.db("test").collection("devices")
  // perform actions on the collection object
  // client.close()
  console.log(
    await client.db("would-ya-watch").collection("events").countDocuments()
  )
})

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        eventAPI: new EventAPI(),
      }
    },
  })

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`
          Server is running!
          Listening on port ${port}
          Query at ${url}
      `)
}

startApolloServer(typeDefs, resolvers)

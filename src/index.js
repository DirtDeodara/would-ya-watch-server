const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")
const EventAPI= require("./datasources/event-api")

/**  Can include and optional parameter of ```mocks``` to the ApolloServer below
  like this: const server = new ApolloServer({ typeDefs, mocks })

 const mocks = {
   Query: () => ({
     tracksForHome: () => [...new Array(6)],
   }),
   Track: () => ({
     id: () => "track_01",
     title: () => "Astro Kitty, Space Explorer",
     author: () => {
       return {
         name: "Grumpy Cat",
         photo:
           "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
       }
     },
     thumbnail: () =>
       "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
     length: () => 1210,
     modulesCount: () => 6,
   }),
 }
 */

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

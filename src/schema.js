const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    "get all events for the current year"
    events: [Event]
  }

  "a specific event"
  type Event {
    "duh"
    EventId: ID
    "name of event"
    Name: String
  }


  # type Mutation {
  #   incrementTrackViews(id: ID!): IncremementTrackViewsResponse!
  # }

  # type IncremementTrackViewsResponse {
  #   "Similar to HTTP status code, represents the status of the mutation"
  #   code: Int!
  #   "Indicates whether the mutation was successful"
  #   success: Boolean!
  #   "Human-readable message for the UI"
  #   message: String!
  #   "Newly updated track after a successful mutation"
  #   track: Track
  # }
`

module.exports = typeDefs

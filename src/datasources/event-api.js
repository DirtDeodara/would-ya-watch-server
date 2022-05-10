const { RESTDataSource } = require("apollo-datasource-rest")

class EventAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.sportsdata.io/v3/mma/scores/json/"
  }

  getAllEvents() {
    return this.get("schedule/ufc/2022?key=34b895ccc59f42b38d572a5ccc2d99df")
  }

  getEventById(EventId) {
    return this.get(`event/${EventId}?key=34b895ccc59f42b38d572a5ccc2d99df`)
  }
}

module.exports = EventAPI

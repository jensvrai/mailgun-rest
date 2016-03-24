BaseModel = require '../BaseModel'

class Events extends BaseModel

  retrieve: (body, fn = null) =>
    @debug "Events::retrieve()"
    @get "events", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Events client

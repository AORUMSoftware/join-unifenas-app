const restful = require('node-restful')
const mongoose = restful.mongoose

const eventSchema = new mongoose.Schema({

    day: { type: String, required: true },
    content: [{
        schedule: { type: String, required: true },
        label: { type: String, required: true },
        title: { type: String, required: false, default: "" },
        qualification: { type: String, required: false, default: "" },
        minister: { type: String, required: false, default: "" },
        ministerDescription: { type: String, required: false, default: "" },
        where: { type: String, required: false, default: "" }
    }],
})

module.exports = restful.model('Event', eventSchema)
const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    description: String,
},
{ timestamps: true })

module.exports = mongoose.model("User", userSchema);
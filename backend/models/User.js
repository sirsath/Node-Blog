const { default: mongoose } = require("mongoose");

module.exports = mongoose.model("user", mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Name"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
    },
    password: {
        type: String,
        required: [true, "Please Provide Password"],
    },
    profile: {
        type: String,
    },
}, { timestamps: true }))
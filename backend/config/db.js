const mongoose = require("mongoose")

const db = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO Connected");
    } catch (error) {
        console.log(`error${error}`);
    }
}
module.exports = db

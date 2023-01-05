const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const app = express()
require("dotenv").config({ path: "./.env" })
db()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/user", require("./routes/userRoutes"))
app.use("/blog", require("./routes/blogRoutes"))
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`SERVER RUNNING http://localhost:${PORT}`))
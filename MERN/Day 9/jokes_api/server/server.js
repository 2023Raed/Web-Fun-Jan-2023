const express = require("express")
const app = express()
const PORT = 8000
const DB = "databaseName"

// Middleware
app.use(express.json(), express.urlencoded({ extended: true }))

//connect to the DB
require("./config/mongoose.config")(DB)

// connect routes
require("./routes/routes")(app)

app.listen(PORT, () => console.log(`SERVER IS RUNNING on PORT ${PORT}`))
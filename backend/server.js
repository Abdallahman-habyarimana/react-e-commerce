const express = require('express')
const color = require('colors')
const app = express()

require('dotenv').config({ path: 'backend/.env' })

require("./startup/db")();
require("./startup/routes")(app);

const PORT = process.env.PORT || 4900
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
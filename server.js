//___________________
//Dependencies
//___________________
const express = require("express") // import express
const middleware = require("./utils/middleware")


//___________________
//Create App Object
//___________________
const app = express()

//___________________
//Middleware
//___________________

middleware(app);


//___________________
//Listener
//___________________
const PORT = process.env.PORT
app.listen(PORT, () => console.log('express is listening on:', PORT));
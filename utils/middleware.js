/////////////////////////////////////////
// Dependencies
/////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
// packages
const express = require("express") // import express
    , morgan = require("morgan") //import morgan
    , methodOverride = require("method-override")
    , session = require("express-session")
    , engine = require('ejs-locals')
//Routers
const CharacterRouter = require("../controllers/character")
    ,UserRouter = require("../controllers/user")
    ,HomeRouter = require("../controllers/home");
    
const MongoStore = require("connect-mongo")
/////////////////////////////////////
// MiddleWare Function
//////////////////////////////////////

const middleware = (app) => {
    app.use(morgan("tiny")); //logging
    app.use(methodOverride("_method")); // override for put and delete requests from forms
    app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
    app.use(express.static("public")); // serve files from public statically
    app.engine('ejs', engine); // Use EJS engine to not have to use .ejs
    app.set('view engine', 'ejs'); // Use EJS engine to not have to use .ejs in views?
    app.use(
      session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false,
      })
    );
    app.use("/characters", CharacterRouter);
    app.use("/user", UserRouter);
    app.use("/", HomeRouter)
  };


///////////////////////////////////////////
// Export Middleware Function
//////////////////////////////////////////

module.exports = middleware
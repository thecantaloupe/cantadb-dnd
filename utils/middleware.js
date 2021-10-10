/////////////////////////////////////////
// Dependencies
/////////////////////////////////////////


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
    app.use("/animals", FruitRouter);
    app.use("/user", UserRouter);
    app.use("/", HomeRouter)
  };


///////////////////////////////////////////
// Export Middleware Function
//////////////////////////////////////////

module.exports = middleware
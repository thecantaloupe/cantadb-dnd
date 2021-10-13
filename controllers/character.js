////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Character = require("../models/character");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use((req, res, next) => {
  if (req.session.loggedIn){
      next()
  } else {
      res.redirect("/user/login")
  }
})

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// index route
router.get("/", (req, res) => {
  Character.find({username: req.session.username}, (err, characters) => {
    res.render("characters/index", { characters });
  });
});

//new route
router.get("/new", (req, res) => {
  res.render("characters/new");
});

// create route
router.post("/", (req, res) => {
  let obj = req.body
  // Fix for Bool
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] === "on" ? true : obj[key];
      obj[key] = obj[key] === null ? 0 : obj[key];
    }
  }
  // add username to req.body to track related user
  req.body.username = req.session.username
  // create the new character
  Character.create(req.body, (err, character) => {
    // redirect the user back to the main characters page after character created
    res.redirect("/characters");
  });
});

// edit route
router.get("/:id/edit", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // get the character from the database
  Character.findById(id, (err, character) => {
      // Fix for null int
      for (let key in character) {
        if (!character.hasOwnProperty(key)) {
          character[key] = character[key] == null ? 0 : character[key];
        }
      }
    // render template and send it character
    res.render("characters/edit", { character });
  });
});

//update route
router.put("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // Fix for Bool
  let obj = req.body
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] === "on" ? true : obj[key];
    }
  }
  // update the character
  Character.findByIdAndUpdate(id, req.body, { new: true }, (err, character) => {
    // redirect user back to main page when character
    res.redirect("/characters");
  });
});

router.delete("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the character
  Character.findByIdAndRemove(id, (err, character) => {
    // redirect user back to index page
    res.redirect("/characters");
  });
});

// show route
router.get("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // find the particular character from the database
  Character.findById(id, (err, character) => {
    // Fix for null int
    for (let key in character) {
      if (!character.hasOwnProperty(key)) {
        character[key] = character[key] == null ? 0 : character[key];
      }
    }
    // render the template with the data from the database
    res.render("characters/show", { character });
  });
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;

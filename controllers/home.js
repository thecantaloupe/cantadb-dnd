////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
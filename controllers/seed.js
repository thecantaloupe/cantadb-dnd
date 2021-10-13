///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Character = require("./character")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// Make sure code is not run till connected
mongoose.connection.on("open", () => {

  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function
  const startCharacters = [
  
  ];

  // Delete all animals
  Character.remove({}, (err, data) => {
    // Seed Starter Animals
    Character.create(startCharacters, (err, data) => {
      // log the create animals to confirm
      console.log("--------Characters CREATED----------");
      console.log(data);
      console.log("--------Character CREATED----------");

      // close the DB connection
      mongoose.connection.close();
    });
  });

  ///////////////////////////////////////////////
  // Write your Seed Code Above
  //////////////////////////////////////////////

});

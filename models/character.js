//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection")

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;


const charactersSchema = new Schema({
  charname: String,
  classlevel: String,
  background: String,
  playername: String,
  race: String,
  alignment: String,
  experiencepoints: {type: Number, default: 0 },
  Strengthscore: {type: Number, default: 0 },
  Strengthmod: {type: Number, default: 0 },
  Dexterityscore: {type: Number, default: 0 },
  Dexteritymod: {type: Number, default: 0 },
  Constitutionscore: {type: Number, default: 0 },
  Constitutionmod: {type: Number, default: 0 },
  Intelligencescore: {type: Number, default: 0 },
  Intelligencemod: {type: Number, default: 0 },
  Wisdomscore: {type: Number, default: 0 },
  Wisdommod: {type: Number, default: 0 },
  Charismascore: {type: Number, default: 0 },
  Charismamod: {type: Number, default: 0 },
  inspiration: {type: Number, default: 0 },
  proficiencybonus: {type: Number, default: 0 },
  Strengthsave: {type: Number, default: 0 },
  Strengthsaveprof: {type: Boolean, default: 'false'},
  Dexteritysave: {type: Number, default: 0 },
  Dexteritysaveprof: {type: Boolean, default: 'false'},
  Constitutionsave: {type: Number, default: 0 },
  Constitutionsaveprof: {type: Boolean, default: 'false'},
  Intelligencesave: {type: Number, default: 0 },
  Intelligencesaveprof: {type: Boolean, default: 'false'},
  Wisdomsave: {type: Number, default: 0 },
  Wisdomsaveprof: {type: Boolean, default: 'false'},
  Charismasave: {type: Number, default: 0 },
  Charismasaveprof: {type: Boolean, default: 'false'},
  Acrobatics: {type: Number, default: 0 },
  Acrobaticsprof: {type: Boolean, default: 'false'},
  AnimalHandling: {type: Number, default: 0 },
  AnimalHandlingprof: {type: Boolean, default: 'false'},
  Arcana: {type: Number, default: 0 },
  Arcanaprof: {type: Boolean, default: 'false'},
  Athletics: {type: Number, default: 0 },
  Athleticsprof: {type: Boolean, default: 'false'},
  Deception: {type: Number, default: 0 },
  Deceptionprof: {type: Boolean, default: 'false'},
  History: {type: Number, default: 0 },
  Historyprof: {type: Boolean, default: 'false'},
  Insight: {type: Number, default: 0 },
  Insightprof: {type: Boolean, default: 'false'},
  Intimidation: {type: Number, default: 0 },
  Intimidationprof: {type: Boolean, default: 'false'},
  Investigation: {type: Number, default: 0 },
  Investigationprof: {type: Boolean, default: 'false'},
  Medicine: {type: Number, default: 0 },
  Medicineprof: {type: Boolean, default: 'false'},
  Nature: {type: Number, default: 0 },
  Natureprof: {type: Boolean, default: 'false'},
  Perception: {type: Number, default: 0 },
  Perceptionprof: {type: Boolean, default: 'false'},
  Performance: {type: Number, default: 0 },
  Performanceprof: {type: Boolean, default: 'false'},
  Persuasion: {type: Number, default: 0 },
  Persuasionprof: {type: Boolean, default: 'false'},
  Religion: {type: Number, default: 0 },
  Religionprof: {type: Boolean, default: 'false'},
  SleightofHand: {type: Number, default: 0 },
  SleightofHandprof: {type: Boolean, default: 'false'},
  Stealth: {type: Number, default: 0 },
  Stealthprof: {type: Boolean, default: 'false'},
  Survival: {type: Number, default: 0 },
  Survivalprof: {type: Boolean, default: 'false'},
  ac: {type: Number, default: 0 },
  initiative: {type: Number, default: 0 },
  speed: {type: Number, default: 0 },
  currenthp: {type: Number, default: 0 },
  maxhp: {type: Number, default: 0 },
  temphp: {type: Number, default: 0 },
  totalhd: String,
  remaininghd: String,
  deathsuccess1: {type: Boolean, default: 'false'},
  deathsuccess2: {type: Boolean, default: 'false'},
  deathsuccess3: {type: Boolean, default: 'false'},
  deathfail1: {type: Boolean, default: 'false'},
  deathfail2: {type: Boolean, default: 'false'},
  deathfail3: {type: Boolean, default: 'false'},
  otherprofs: String,
  defenses: String,
  savenotes: String,
  movement: String,
  senses: String,
  passiveperception: {type: Number, default: 0 },
  passiveinsight: {type: Number, default: 0 },
  passiveinvestigation: {type: Number, default: 0 },
  username: String,
});




// make character model
const Character = model("Character", charactersSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Character

// import the connected mongoose object
const mongoose = require("./connection")


/////////////////////////////////////////
// Our Model
/////////////////////////////////////////
const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

//Schema for user or admin
const regularUserSchema = new Schema({
    user: userSchema,
    // regular-only properties
    roles: {type: String, required: true}
})

const adminUserSchema = new Schema({
    user: userSchema,
    // admin-only properties
    roles: {type: String, required: true}
    
})

const User = model("User", regularUserSchema)
const Admin = model("Admin", adminUserSchema)

//export the model
module.exports = {
    User: User,
    Admin: Admin
}
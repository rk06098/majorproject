const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose =
  require("passport-local-mongoose").default ||
  require("passport-local-mongoose");


const userSchema = new Schema({
  email: {                   //baki remaining field ie username and password ye passport local mongoose automatically add kr dega
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);  // passportLocalMongoose ko as a plugin use kiya kyuki ye automatically hamare liye ysername, hashing saltin and hashed password in sabko automaticlly implement kr dega

module.exports = mongoose.model("User", userSchema);


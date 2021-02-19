const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
      }
  });

// function to generate the token
// Information expert principle
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({
    _id: this._id,
    name: this.name,
    email: this.email,
    completed: this.completed
  },
  process.env.SECRET_KEY
  )
  return token;
}


// Define the user model
const User = mongoose.model("User", userSchema);

exports.User = User; 
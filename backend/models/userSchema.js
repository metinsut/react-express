const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      minlength: 5
   },
   token: {
      type: String
   },
   name: String,
   surName: String,
   birthday: Date,
   joinDate: {
      type: Date,
      default: Date.now()
   },
   isActive: Boolean,
   bio: String,
   company: Array,
   school: Array,
   location: {
      counrty: String,
      city: String
   },
   profilImage: String,
   follewedUser: Array,
   follewerUser: Array,
   likePost: Array,
   comment: Array,
   post: Array,
   rePost: Array
});

module.exports = mongoose.model("user", UserSchema);

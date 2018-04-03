const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true
   },
   token: {
      type: String,
      required: true,
      unique: true
   }
});

module.exports = mongoose.model("token", TokenSchema);

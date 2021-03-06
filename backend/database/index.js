const mongoose = require("mongoose");

const database = () => {
   mongoose.connect(
      "mongodb://metinsut:mtn123456@ds229909.mlab.com:29909/site",
      { useNewUrlParser: true }
   );

   mongoose.connection.on("error", err => {
      console.log("MongoDB: Error", err);
   });

   mongoose.connection.once("open", () => {
      console.log("we're connected! ");
   });

   mongoose.Promise = global.Promise;
};

module.exports = database;

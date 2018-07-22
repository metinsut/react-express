const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
     id: Number,
     name:String,
     email:String,
     gender:String,
     city:String,
     country:String,
     department:String,
     title:String,
     birthday:Object,
     enter:Object,
     time:String,
     year:Number,
     image:String,
     avatar:String,
     language:String,
     active:Boolean,
     salary:Number,
     sell:Number,
     lat:Number,
     long:Number
});

module.exports = mongoose.model('person', PersonSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
     id: Number,
     first_name:String,
     last_name:String,
     email:String,
     gender:String,
     city:String,
     country:String,
     departman:String,
     job_title:String,
     date:String,
     date2:Date,
     date3:Object,
     date4:Date,
     created_at:{
          type:Date,
          default:Date.now()
     },
     year:Number,
     time:String,
     image:String,
     avatar:String,
     image_url:String,
     language:String,
     row:Number,
     active:Boolean,
     web:String,
     salary:String,
     sell:String,
     lat:Number,
     long:Number
});

module.exports = mongoose.model('person', PersonSchema);

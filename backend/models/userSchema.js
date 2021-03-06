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
    interestedIn: Array,
    gender: String,
    isReadTerm: Boolean,
    company: Array,
    school: Array,
    location: {
        counrty: String,
        city: String
    },
    profileImage: String,
    follewedUser: Array,
    follewerUser: Array,
    likePost: Array,
    comment: Array,
    post: Array,
    rePost: Array,
    link: {
        type: String,
        unique: true,
        required: true,
        default: new mongoose.Types.ObjectId
    }
});

module.exports = mongoose.model("user", UserSchema);

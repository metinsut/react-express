const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    owner: Object,
    post: {
        id: {
            type: String,
            unique: true,
            required: true,
            value: new mongoose.Types.ObjectId()
        },
        title: String,
        desc: String,
        link: {
            type: String,
            unique: true,
            required: true,
            default: new mongoose.Types.ObjectId()
        },
        created_at: {
            type: Date,
            default: Date.now()
        },
        type: {
            id: Number,
            name: String
        }
    },
    social: {
        comment: {
            count: Number,
            data: Array
        }
    },
    liked: Array,
    repost: Array,
    media: {
        video: Array,
        photo: Array
    }
});

module.exports = mongoose.model("post", PostSchema);

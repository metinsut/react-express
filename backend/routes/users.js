const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/", (req, res) => {
    const getUser = userSchema.find({}).select("name bio link");

    getUser
        .then(data => {
            res.json({ success: data });
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/single", (req, res) => {
    link = req.body.link;
    const getUser = userSchema.find({ link: link }).select("name bio link");
    getUser
        .then(data => {
            res.json({ success: data });
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;

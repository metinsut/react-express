const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const userSchema = require("../models/userSchema");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "../../uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

const type = upload.single("image");

router.post("/", type, (req, res) => {
    console.log("OKAY");
    console.log(req.file);
    res.json({
        success: {
            name: "okay"
        }
    });
});

module.exports = router;

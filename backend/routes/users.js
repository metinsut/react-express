const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/:username", (req,res)=> {
      const username = req.params.username;
      console.log(username)
})

module.exports = router;
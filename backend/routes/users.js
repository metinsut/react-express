const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/:email", (req, res) => {
   const email = req.params.email;

   const getUser = userSchema.findOne({ email: email });

   getUser
      .then(data => {
         res.json({ success: data });
      })
      .catch(err => {
         res.json(err);
      });
});

module.exports = router;

const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../../models/userSchema");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", (req, res) => {
   const { email, password } = req.body;

   const name = email.split("@")[0];

   bcrypt.hash(password, 10).then(hash => {
      const user = new userSchema({
         email,
         password: hash,
         name: name
      });

      const userSave = user.save();
      userSave
         .then(data => {
            res.json({
               success: {
                  email: data.email,
                  message: "Your sign has been successful"
               }
            });
         })
         .catch(err => {
            res.json(err);
         });
   });
});

module.exports = router;

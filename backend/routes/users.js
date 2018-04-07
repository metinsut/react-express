const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/:token", (req, res) => {
   const token = req.params.token;

   const getUser = userSchema.findOne({ token: token });

   getUser
      .then(data => {
         res.json({ success: data });
      })
      .catch(err => {
         res.json(err);
      });
});


router.post("/update/:token", (req,res)=> {
      const token = req.params.token;
})

module.exports = router;

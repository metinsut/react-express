const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const tokenSchema = require("../../models/tokenScheme");

router.post("/", (req, res) => {
   const { token } = req.body;
   const removeToken = tokenSchema.findOneAndRemove({ token: token });

   removeToken
      .then(data => {
         if (data) {
            res.json({
               status: false,
               token: null,
               message: "You has been logout successfuly."
            });
         } else {
            res.json({
               status: false,
               token: null,
               message: "No token found"
            });
         }
      })
      .catch(err => {
         res.json(err);
      });
});

module.exports = router;

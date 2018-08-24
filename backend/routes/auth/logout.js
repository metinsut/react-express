const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userSchema = require("../../models/userSchema");

router.post("/", (req, res) => {
      const token = req.headers["x-access-token"];
      const removeToken = userSchema.findOneAndUpdate(
            { token: token },
            { $set: { token: null } },
            { new: true }
      );

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

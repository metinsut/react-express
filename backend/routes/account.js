const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/", (req, res) => {
      const token = req.body.token;
      const getAccount = userSchema.findOne({ token: token });

      getAccount
            .then(data => {
                  res.json({
                        success: data
                  });
            })
            .catch(err => {
                  res.json(err);
            });
});

router.post("/update", (req, res) => {
      const token = req.body.token;
      const updateAccount = userSchema.findOneAndUpdate(token, req.body, {
            new: true
      });

      updateAccount
            .then(data => {
                  res.json({
                        success: {
                              data
                        }
                  });
            })
            .catch(err => {
                  res.json({
                        success: {
                              err
                        }
                  });
            });
});

module.exports = router;

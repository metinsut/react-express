const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../../models/userSchema");
const key = require("../../helpers/apiSecretKey");

router.post("/", (req, res) => {
      const { email, password } = req.body;
      userSchema.findOne(
            {
                  email
            },
            (err, data) => {
                  if (err) {
                        throw err;
                  }
                  if (!data) {
                        res.json({
                              status: false,
                              message: " Authenticate failed, user not found."
                        });
                  } else {
                        bcrypt.compare(password, data.password).then(result => {
                              if (!result) {
                                    res.json({
                                          status: false,
                                          message:
                                                " Authenticate failed, wrong password."
                                    });
                              } else {
                                    const payload = {
                                          email
                                    };
                                    const token = jwt.sign(
                                          payload,
                                          key.api_secret_key
                                    );

                                    const userSave = userSchema.findOneAndUpdate(
                                          {
                                                email: email
                                          },
                                          { $set: { token: token } },
                                          { new: true }
                                    );

                                    userSave
                                          .then(data => {
                                                res.json({
                                                      status: true,
                                                      token: data.token,
                                                      name: data.name
                                                });
                                          })
                                          .catch(err => {
                                                res.json({
                                                      status: false,
                                                      err
                                                });
                                          });
                              }
                        });
                  }
            }
      );
});

module.exports = router;

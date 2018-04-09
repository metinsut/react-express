const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
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

router.post("/email", (req, res) => {
    const previousEmail = req.body.previousEmail;
    const email = req.body.email;
    const updateEmail = userSchema.findOneAndUpdate(
        { email: previousEmail },
        { email: email },
        {
            new: true
        }
    );
    updateEmail
        .then(data => {
            if (!data) {
                res.json({ success: { error: "Email is not exist." } });
            }
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

router.post("/password", (req, res) => {
    const previousPassword = req.body.previousPassword;
    const password = req.body.password;
    const token = req.body.token;
    userSchema.findOne({ token: token }, (err, data) => {
        if (err) {
            throw err;
        }

        if (!data) {
            res.json({
                success: {
                    messeage: "Authenticate failed, token not found ***"
                }
            });
        } else {
            bcrypt.compare(previousPassword, data.password).then(result => {
                if (!result) {
                    res.json({
                        success: {
                            messeage: "Authenticate failed, wrong password."
                        }
                    });
                } else {
                    bcrypt.hash(password, 10).then(hash => {
                        const updatePassword = userSchema.findOneAndUpdate(
                            {
                                token: token
                            },
                            { $set: { password: hash } },
                            {
                                new: true
                            }
                        );

                        updatePassword
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
                }
            });
        }
    });
});

module.exports = router;

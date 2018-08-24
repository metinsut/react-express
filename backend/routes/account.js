const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const userSchema = require("../models/userSchema");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "backend/images");
        console.log("destination")
    },
    filename: (req, file, cb) => {
        console.log(fileName)
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", (req, res) => {
    const token = req.headers["x-access-token"];
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
    const id = req.body._id;
    const updateAccount = userSchema.findOneAndUpdate({ _id: id }, req.body, {
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
    const token = req.headers["x-access-token"];
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

router.post("/company", (req, res) => {
    const token = req.headers["x-access-token"];
    const index = req.body.index;
    const company = req.body.company;

    const getUser = userSchema.findOneAndUpdate(
        { token: token },
        { $push: { company: company } },
        { new: true }
    );

    getUser
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

router.post("/companyedit", (req, res) => {
    const token = req.headers["x-access-token"];
    const index = req.body.index;
    const company = req.body.company;
    const id = req.body.company.id;

    const getUser = userSchema.findOne({ token: token }, (err, data) => {
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
            const updateCompany = userSchema.findOneAndUpdate(
                { "company.id": id },
                {
                    $set: {
                        "company.$.name": company.name,
                        "company.$.position": company.position,
                        "company.$.startYear": company.startYear,
                        "company.$.endYear": company.endYear,
                        "company.$.stillWork": company.stillWork
                    }
                },
                { new: true }
            );

            updateCompany
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
        }
    });
});

router.post("/companydelete", (req, res) => {
    const token = req.headers["x-access-token"];
    const id = req.body.id;
    const updateCompany = userSchema
        .find({ token: token })
        .update({}, { $pull: { company: { id: id } } });
    updateCompany
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

router.post("/upload", upload.single("userImage"), (req, res) => {
    console.log(req.file);
    res.json({
        success: {
            name: "okay"
        }
    });
});

module.exports = router;

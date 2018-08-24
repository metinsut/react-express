const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../../models/userSchema');
const key = require('../../helpers/apiSecretKey');

router.post('/', (req, res) => {
    const token = req.headers["x-access-token"];
    userSchema.findOne(
        {
            token
        },
        (err, data) => {
            if (err) {
                throw err;
            }
            if (!data) {
                res.json({
                    status: false,
                    message: 'Authenticate failed, user not found.'
                });
            } else {
                res.json({
                    status: true,
                    message: 'Authenticate succesed.',
                    name:data.name
                });
            }
        }
    );
});

module.exports = router;

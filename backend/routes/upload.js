const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    let sampleFile = req.files.file;
    sampleFile.mv(__dirname + "/../uploads/" + sampleFile.name, err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({
            success: {
                file: req.file,
                name: "okay"
            }
        });
    });
});

module.exports = router;

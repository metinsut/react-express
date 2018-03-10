const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


// GET DIRECTORS
router.get("/", (req, res) => {
      const siteLayout = {
            success: {
                  tr: {
                        header: {
                              title:"Piston Aşağıya İndi...",
                        },
                        home: {
                              title:"Anasayfaya hoş geldiniz."
                        },
                        footer: {
                              title:"Burası sitenin en alt kısmı."
                        }

                  },
                  en: {
                        header:{
                              title:"Stack Overflow"
                        },
                        home: {
                              title:"Welcome to Home page."
                        },
                        footer: {
                              title:"This is the bottom of site."
                        }
                  }
            }
      };
      res.json(siteLayout);
});


module.exports = router;
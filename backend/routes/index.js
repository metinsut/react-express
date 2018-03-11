const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


// GET DIRECTORS
router.get("/", (req, res) => {
      const siteLayout = {
            success: {
                  TR: {
                        lang:"TR",
                        header: {
                              title:"Kullanıcı veri servisi",
                              desc:"Piston Aşağıya İndi...",
                              login:"Giriş",
                              logout:"Çıkış",
                              singup:"Üye Ol",
                        },
                        home: {
                              title:"Anasayfaya hoş geldiniz."
                        },
                        footer: {
                              title:"Burası sitenin en alt kısmı."
                        }

                  },
                  EN: {
                        lang:"EN",
                        header:{
                              title:"User Data Service",
                              desc:"Stack Overflow",
                              login:"Login",
                              logout:"Logout",
                              singup:"Sign Up",
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
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


// GET SITE
router.get("/", (req, res) => {

      const siteLayout = {

            success: {
                  tr: {
                        lang: "tr",
                        header: {
                              title: "Kullanıcı veri servisi",
                              desc: "Piston Aşağıya İndi...",
                              login: "Giriş",
                              logout: "Çıkış",
                              singup: "Üye Ol",
                        },
                        home: {
                              title: "Anasayfaya hoş geldiniz."
                        },
                        footer: {
                              title: "Burası sitenin en alt kısmı."
                        },
                        about: {
                              title: "About Page",
                              desc: "We are just noting",
                              images: [
                                    {
                                          name: "IMAGE ONE",
                                          url: "img1.jpg"
                                    },
                                    {
                                          name: "IMAGE TWO",
                                          url: "img2.jpg"
                                    },
                                    {
                                          name: "IMAGE THREE",
                                          url: "img3.jpg"
                                    },
                                    {
                                          name: "IMAGE FOUR",
                                          url: "img4.jpg"
                                    },
                                    {
                                          name: "IMAGE FIVE",
                                          url: "img5.jpg"
                                    },
                                    {
                                          name: "IMAGE SIX",
                                          url: "img6.jpg"
                                    },
                                    {
                                          name: "IMAGE SEVEN",
                                          url: "img7.jpg"
                                    },
                                    {
                                          name: "IMAGE EIGHT",
                                          url: "img8.jpg"
                                    },
                                    {
                                          name: "IMAGE NIGHT",
                                          url: "img9.jpg"
                                    },
                                    {
                                          name: "IMAGE TEN",
                                          url: "img10.jpg"
                                    }
                              ]
                        }
                  },
                  en: {
                        lang: "en",
                        header: {
                              title: "User Data Service",
                              desc: "Stack Overflow...",
                              login: "Login",
                              logout: "Logout",
                              singup: "Sign Up",
                        },
                        home: {
                              title: "Welcome to Home page."
                        },
                        footer: {
                              title: "This is the bottom of site."
                        },
                        about: {
                              title: "About Page",
                              desc: "We are just noting",
                              images: [
                                    {
                                          name: "IMAGE ONE",
                                          url: "img1.jpg"
                                    },
                                    {
                                          name: "IMAGE TWO",
                                          url: "img2.jpg"
                                    },
                                    {
                                          name: "IMAGE THREE",
                                          url: "img3.jpg"
                                    },
                                    {
                                          name: "IMAGE FOUR",
                                          url: "img4.jpg"
                                    },
                                    {
                                          name: "IMAGE FIVE",
                                          url: "img5.jpg"
                                    },
                                    {
                                          name: "IMAGE SIX",
                                          url: "img6.jpg"
                                    },
                                    {
                                          name: "IMAGE SEVEN",
                                          url: "img7.jpg"
                                    },
                                    {
                                          name: "IMAGE EIGHT",
                                          url: "img8.jpg"
                                    },
                                    {
                                          name: "IMAGE NIGHT",
                                          url: "img9.jpg"
                                    },
                                    {
                                          name: "IMAGE TEN",
                                          url: "img10.jpg"
                                    }
                              ]
                        }
                  }
            }

      }

res.json(siteLayout);
});


module.exports = router;
const express = require("express")
const routeur = express.Router()
const mongoose = require("mongoose")

const LivreModel = require("./models/mesLivres")

mongoose.connect("mongodb+srv://ousmaneseye:qR2e1c8GlvMtN07t@cluster0.zadpjye.mongodb.net/biblio")
//mongodb+srv://ousmaneseye:<password>@cluster0.zadpjye.mongodb.net/
routeur.get("/livres", (req, res) => {
    LivreModel.find()
    .then(livres => res.json(livres))

    .catch(err => res.json(err))

})

routeur.post("/livres", (req, res) => {

})
    
    
module.exports = routeur
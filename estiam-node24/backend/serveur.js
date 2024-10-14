
const express = require("express")
const server = express()

const cors = require("cors")
const indexRouter = require("./routeur")

server.use(express.json())
server.use(cors())
server.use("/", indexRouter)
server.use("/livres", indexRouter)

server.listen(3000, () => {
  console.log("Serveur is running ")
})
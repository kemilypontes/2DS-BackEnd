// npm init 
// npm i express
// instalar extensão RaoiAPI Client no VScode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get("/ola", (req, res) => {
    res.json({responta: "Olá Mundo!"})
})

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})

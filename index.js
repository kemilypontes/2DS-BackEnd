// npm init 
// npm i express
// instalar extensão RaoiAPI Client no VScode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/clientes", (req, res) => {
    const cliente = req.body
    // abrir o arquivo
    try{
        const bd =  JSON.parse(fs.readFileSync("bd.json", "utf8"))
        //adcionar o cliente
        bd.push(cliente)
        // salvar o arquivo
        fs.writeFileSync("bd.json" , JSON.stringify(bd), "utf8")
        //resposta
        res.status(201).json({resposta: "Cliente cadastrado!"})
    } catch (erro) {
        res.status(500).json({erro: erro.message})

    }
    
})

app.get("/ola", (req, res) => {
    res.json({responta: "Olá Mundo!"})
})

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})

// npm init
// npm i express
// instalar extensão RapidAPI Client no VSCode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/clientes", (req, res) => {
    const cliente = req.body
    try {
        // abrir o arquivo
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        // adicionar o cliente
        bd.push(cliente)
        // salvar o arquivo
        fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
        // resposta
        res.status(201).json({resposta: "Cliente cadastrado!"})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})

app.get("/clientes", (req, res) => {
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        res.status(200).json({resposta: bd})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})
app.delete("/clientes/:cpf", (req, res) => {
    //pegar o cpf da rota
    const cpf = req.params.cpf
        try{
        //abrir o banco de dados
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
         //encontrar o indice do cliente a ser excluido
        const indiceClientes = bd.findIndex((cliente) => cliente.cpf == cpf)
        //remover o indice da lista
        if(indiceClientes == -1){
            return res.status(484).json({erro: "O cliente não existe"})
        }
        bd.splice(indiceClientes, 1)
        //dar uma resposta para o cliente
        res.status(200).json({resposta:"Cliente excluido com sucesso"})
    }catch (error){
        res.status(500).json({erro: erro.mensageS})
    }
})

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})

// GET http://localhost:3000/clientes

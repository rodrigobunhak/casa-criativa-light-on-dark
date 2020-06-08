// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db")




// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))


// Configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // Não registra cache, bom para quando se está desenvolvendo
})


// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)
    
        const reverseIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reverseIdeas) {
            if(lastIdeas.length < 3) {
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", { ideas:lastIdeas })
    })
})

server.get("/ideias", function(req, res) {

    
    db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)

    const reverseIdeas = [...rows].reverse()

    return res.render("ideias.html", { ideas: reverseIdeas })
    })
})

server.post("/", function(req, res) {
    // Inserir dados na tabela
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]
    // Comando para inserir os dados
    db.run(query, values, function(err) {
        if (err) return console.log(err)

        return res.redirect("/ideias")
    })
})

// Liguei meu servidor na porta 3000
server.listen(3000)
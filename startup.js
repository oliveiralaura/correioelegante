const mysql = require('mysql');
const path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'correioelegante' 
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});


const express = require("express")
const app = express()

const consign = require("consign")

app.set('view engine', 'ejs')
app.set('views','mvc/views')
app.use(express.static('mvc/views/public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

consign()
        .include("mvc/controllers")
        .into(app)


app.listen(3001, () => console.log("Online Server at port 3001"))

app.get("/caixamensagem", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.sendFile(path.resolve(__dirname, "./mvc/views/", "caixamensagens.html"));
});

module.exports = app



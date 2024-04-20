const MensagemDAO = require("../../DAO/mensagemDAO.js")
const path = require("path")
module.exports = (app) => {

    app.get("/mensagem", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        
        res.sendFile(path.resolve("mvc/views/mensagens.html"))
      
     })
     app.get("/getMensagem", async (req, res) => {
        const mensagemDAO = new MensagemDAO()       
            
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await mensagemDAO.consultarMensagem())
    })
    app.post("/registrarmensagem", (req, res) => {
        const mensagemDAO = new MensagemDAO();
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const { mensagem, destinatario } = req.body;
        
        
    
        mensagemDAO.mensagem(mensagem, destinatario); 
    
        res.sendFile(path.resolve('./mvc/views/opcao.html'))

    });
    

   
}
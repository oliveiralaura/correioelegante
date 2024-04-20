const Mensagem = require("../mvc/models/mensagemModel");
const Database = require("../repository/database");

class MensagemDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarMensagem() {

        const list_mensagens = []
        const query = await this.#conexao.selectMensagem()

        for (let index = 0; index < query.length; index++) {

            const mensagens = new Mensagem()

            mensagens.id = query[index].id_mensagem
            mensagens.nome = query[index].nome_mensagem
            mensagens.usuario = query[index].usuario_mensagem

            list_mensagens.push(mensagens.toJson())
        }
        return list_mensagens
    }
    async mensagem(mensagem, destinatario) { 
        const mensagens = new Mensagem(mensagem, destinatario);
        const sql = await this.#conexao.insertMensagem({
            texto_mensagem: mensagens.pessoaMensagem, 
            usuarios_id_usuario: mensagens.mensagem 
        });
        return sql.insertId;
    }
    
    
    
}

module.exports = MensagemDAO


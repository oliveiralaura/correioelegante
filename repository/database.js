const mysql = require("mysql2");

class Database {
    #connection;

    constructor() {
        // Configuração do banco
        this.#connection = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "correioelegante",
        }).promise();
    }

    async selectCadastro(){
        const query = await this.#connection.query("select * from usuarios")
        return query[0]
     }
     async insertCadastro(param) {
        const sql = `INSERT INTO usuarios (nome_usuario, email_usuario, foto_usuario, rm_usuario) 
                     VALUES ('${param.nome}', '${param.email}', '${param.foto}', '${param.rm}')`; // Aqui estamos usando param.rm para RM
        const query = await this.#connection.execute(sql);
        return query[0];
    }
    
    
    async selectMensagem(){
        const query = await this.#connection.query("select * from mensagens")
        return query[0]
     }
     async insertMensagem(param) {
        const sql = `INSERT INTO mensagens (id_mensagem, texto_mensagem, usuarios_id_usuario) 
                     VALUES (null, '${param.texto_mensagem}', ${param.usuarios_id_usuario})`; 
        const query = await this.#connection.execute(sql);
        return query[0];
    }
    
    

}

module.exports = Database;

const Cadastro = require("../mvc/models/cadastroModel");
const Database = require("../repository/database");

class CadastroDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarCadastro() {

        const list_cadastros = []
        const query = await this.#conexao.selectCadastro()

        for (let index = 0; index < query.length; index++) {

            const cadastro = new Cadastro()

            cadastro.id = query[index].id_usuario
            cadastro.nome = query[index].nome_usuario
            cadastro.email = query[index].email_usuario
            cadastro.foto = query[index].foto_usuario

            list_cadastros.push(cadastro.toJson())
        }
        return list_cadastros
    }
    async cadastrar(nome, email, foto) {
        const cadastro = new Cadastro(nome, email, foto);
        console.log("Cadastro criado:", cadastro.toJson()); 
    
        const sql = await this.#conexao.insertCadastro({
            nome: cadastro.nomeUsuario,
            email: cadastro.emailUsuario,
            foto: cadastro.fotoUsuario,
            rm: cadastro.emailUsuario 
        });
                
        return sql.insertId;
    }
    
}

module.exports = CadastroDAO


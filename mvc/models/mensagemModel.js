class Mensagem {
    #id;

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }

    #mensagem;
    get mensagem() {
        return this.#mensagem;
    }
    set mensagem(value) {
        this.#mensagem = value;
    }
    #pessoaMensagem;
    get pessoaMensagem() {
        return this.#pessoaMensagem;
    }
    set pessoaMensagem(value) {
        this.#pessoaMensagem = value;
    }

    constructor(pessoaMensagem, mensagem) {
        this.#pessoaMensagem = pessoaMensagem;
        this.#mensagem = mensagem;
    }

    toJson() {
        return {
            "id": this.#id,
            "mensagem": this.#mensagem,
            "nome": this.#pessoaMensagem
            
        };
    }
}

module.exports = Mensagem;

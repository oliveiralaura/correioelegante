class Cadastro {

    #id;

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }

    #nomeUsuario;
    get nomeUsuario() {
        return this.#nomeUsuario;
    }
    set nomeUsuario(value) {
        this.#nomeUsuario = value;
    }

    #emailUsuario;
    get emailUsuario() {
        return this.#emailUsuario;
    }
    set emailUsuario(value) {
        this.#emailUsuario = value;
    }

    #fotoUsuario;
    get fotoUsuario() {
        return this.#fotoUsuario;
    }
    set fotoUsuario(value) {
        this.#fotoUsuario = value;
    }

    constructor(nomeUsuario, emailUsuario, fotoUsuario) {
        this.#nomeUsuario = nomeUsuario;
        this.#emailUsuario = emailUsuario;
        this.#fotoUsuario = fotoUsuario;
    }

    toJson() {
        return {
            "id": this.#id,
            "nome": this.#nomeUsuario,
            "email": this.#emailUsuario,
            "foto": this.#fotoUsuario
        };
    }
}

module.exports = Cadastro;

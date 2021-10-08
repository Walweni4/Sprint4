"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filme_js_1 = require("./filme.js");
var PerfilLogin = /** @class */ (function () {
    function PerfilLogin(p, id) {
        this.favoritos = [];
        this.perfil = p;
        this.nick = id;
    }
    PerfilLogin.prototype.adicionarFavoritos = function (filme) {
        this.favoritos.push(filme);
        console.log("Filme adicionado!");
    };
    return PerfilLogin;
}());
var perfilEscolha = new PerfilLogin(2, "walzinha");
console.log(perfilEscolha);
var bobEsponja = new filme_js_1.Filme(1, "1213", "Bob Esponja", 2021, "Animação", 5);
perfilEscolha.adicionarFavoritos(bobEsponja);

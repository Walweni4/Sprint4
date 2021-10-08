import {Filme} from "./filme.js";

class PerfilLogin {
    private perfil: number;
    private nick: string;
    private favoritos: Filme[] = [];

    constructor(p: number, id: string){
        this.perfil = p;
        this.nick = id;
    }

    adicionarFavoritos(filme: Filme){
        this.favoritos.push(filme);
        console.log("Filme adicionado!");
    }
}

const perfilEscolha = new PerfilLogin(2, "walzinha");
console.log(perfilEscolha);

const bobEsponja = new Filme(1, "1213", "Bob Esponja", 2021, "Animação", 5);
perfilEscolha.adicionarFavoritos(bobEsponja)
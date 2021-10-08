class CategoriaFilme{
    private categoria: number;

    constructor(choice: number){
        this.categoria = choice;
    }

    get choice(){
        return this.categoria;
    }
}

export class Filme extends CategoriaFilme{
    private id: string;
    public nome: string;
    public ano: number;
    public genero: string;
    public classificação: number;

    constructor(categoria: number, cod: string, n: string, a: number, g: string, c: number){
        super(categoria);
        this.id = cod;
        this.nome = n;
        this.ano = a;
        this.genero = g;
        this.classificação = c;
    }
}



class  Login{
    private user: string;
    private password: string;

    constructor(usuario: string, senha: string){
        this.user = usuario;
        this.password = senha;
    }

}

const wal = new Login("walwenia", "12345");
const ana = new Login("ana", "123");
console.log(wal);
console.log(ana);

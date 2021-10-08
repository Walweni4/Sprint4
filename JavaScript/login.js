"use strict";
var Login = /** @class */ (function () {
    function Login(usuario, senha) {
        this.user = usuario;
        this.password = senha;
    }
    return Login;
}());
var wal = new Login("walwenia", "12345");
var ana = new Login("ana", "123");
console.log(wal);
console.log(ana);

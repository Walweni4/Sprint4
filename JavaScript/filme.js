"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var CategoriaFilme = /** @class */ (function () {
    function CategoriaFilme(choice) {
        this.categoria = choice;
    }
    Object.defineProperty(CategoriaFilme.prototype, "choice", {
        get: function () {
            return this.categoria;
        },
        enumerable: false,
        configurable: true
    });
    return CategoriaFilme;
}());
var Filme = /** @class */ (function (_super) {
    __extends(Filme, _super);
    function Filme(categoria, cod, n, a, g, c) {
        var _this = _super.call(this, categoria) || this;
        _this.id = cod;
        _this.nome = n;
        _this.ano = a;
        _this.genero = g;
        _this.classificação = c;
        return _this;
    }
    return Filme;
}(CategoriaFilme));
exports.Filme = Filme;

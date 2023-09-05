function Formas(nome, altura, largura) {
    this.nome = nome;
    this.altura = altura;
    this.largura = largura;

    this.calcArea = () => {
        const area = this.altura * this.largura
        return area;
    }
}

function Triangulo(altura, largura) {
    Formas.call(this, "Triangulo", altura, largura);

    this.getArea = () => {
        return this.calcArea() / 2;
    }
}

function Losango(altura, largura) {
    Formas.call(this, "Losango", altura, largura)

    this.getArea = () => {
        return this.calcArea() / 2;
    }
}

const retangulo = new Formas("Retangulo", 10, 15);
const triangulo = new Triangulo(8, 11);
const losango = new Losango(12, 9);
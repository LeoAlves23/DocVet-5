export class Porte {
  valor: number;
  descricao: string;

  constructor(valor: number, descricao: string) {
    this.valor = valor;
    this.descricao = descricao.toLowerCase();
  }
}

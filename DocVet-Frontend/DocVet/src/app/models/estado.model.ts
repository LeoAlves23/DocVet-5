import { Cidade } from "./cidade.model";

export class Estado {
  id: number;
  nome: string;
  cidades: Cidade[];

  constructor(id: number, nome: string, cidades: Cidade[]) {
    this.id = id;
    this.nome = nome;
    this.cidades = cidades;
  }
}

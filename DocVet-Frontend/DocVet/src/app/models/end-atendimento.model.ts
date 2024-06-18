import { Cidade } from './cidade.model';
import { Veterinario } from './veterinario.model';

export class EndAtendimento {
  cidade: Cidade;
  veterinario: Veterinario;
  id: number;
  clinica: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;

  constructor(
    cidade: Cidade,
    veterinario: Veterinario,
    id: number,
    clinica: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cep: string
  ) {
    this.cidade = cidade;
    this.veterinario = veterinario;
    this.id = id;
    this.clinica = clinica;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cep = cep;
  }
}

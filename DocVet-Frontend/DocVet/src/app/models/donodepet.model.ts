import { Pet } from './pet.model';

export class DonoDoPet {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  foto: string;
  senha: string;
  telefones: Set<string>;
  pets: Set<Pet>;

  constructor(
    id: number,
    nome: string,
    cpf: string,
    email: string,
    foto: string,
    senha: string,
    telefones: Set<string>,
    pets: Set<Pet>
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.foto = foto;
    this.senha = senha;
    this.telefones = telefones;
    this.pets = pets;
  }
}

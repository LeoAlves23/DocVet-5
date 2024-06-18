export class Usuario {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    foto: string;
    senha: string;
    telefones: Set<string>;
  
    constructor(
      id: number,
      nome: string,
      cpf: string,
      email: string,
      foto: string,
      senha: string,
      telefones: Set<string>
    ) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.email = email;
      this.foto = foto;
      this.senha = senha;
      this.telefones = telefones;
    }
  }
  
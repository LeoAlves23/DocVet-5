import { Pet } from './pet.model';
import { Veterinario } from './veterinario.model';

export class TipoAnimal {
  id: number;
  nome: string;
  pets: Pet[];
  veterinarios: Veterinario[];

  constructor(
    id: number,
    nome: string,
    pets: Pet[] = [],
    veterinarios: Veterinario[] = []
  ) {
    this.id = id;
    this.nome = nome;
    this.pets = pets;
    this.veterinarios = veterinarios;
  }
}

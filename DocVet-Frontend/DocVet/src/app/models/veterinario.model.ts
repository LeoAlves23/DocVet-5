import { Convenio } from "./convenio.model";
import { Especialidade } from "./especialidade.model";
import { Porte } from "./porte-animal.model";
import { TipoAnimal } from "./tipo-animal.model";

export class Veterinario {
  id: number = 0;
  nome: string = "";
  crmv: string = '';
  email: string = '';
  foto: string = '';
  senha: string = '';
  valor: number = 0;
  especialidades: Especialidade[] = [];
  convenios: Convenio[] = [];
  tipoAnimal: TipoAnimal[] = [];
  portes: Porte[] = [];
  telefones: string[] = [];

}

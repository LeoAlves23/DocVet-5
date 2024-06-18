import { Component, Input } from '@angular/core';
import { Especialidade } from '../../models/especialidade.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Convenio } from '../../models/convenio.model';
import { Veterinario } from '../../models/veterinario.model';

@Component({
  selector: 'app-vet-container-listagem',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './vet-container-listagem.component.html',
  styleUrl: './vet-container-listagem.component.css'
})
export class VetContainerListagemComponent {
  constructor() {
    this.onClick = () => {};
  }

  @Input() nome: string = '';
  @Input() foto: string = '';
  @Input() valor: number = 0;
  @Input() especialidades: Especialidade[] = [];
  @Input() convenios: Convenio[] = [];
  @Input() telefones: string[] = [];
  @Input() onClick: () => void;
}

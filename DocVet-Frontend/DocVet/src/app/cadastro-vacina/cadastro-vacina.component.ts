import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-vacina',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './cadastro-vacina.component.html',
  styleUrl: './cadastro-vacina.component.css'
})
export class CadastroVacinaComponent {

}

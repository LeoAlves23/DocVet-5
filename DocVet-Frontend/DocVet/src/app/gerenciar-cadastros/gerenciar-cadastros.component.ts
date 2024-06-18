import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gerenciar-cadastros',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './gerenciar-cadastros.component.html',
  styleUrl: './gerenciar-cadastros.component.css'
})
export class GerenciarCadastrosComponent {

}

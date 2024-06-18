import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent  {

  usuario: Usuario = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    foto: '',
    senha: '',
    telefones: new Set<string>() 
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarDadosUsuario();
  }

  carregarDadosUsuario(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const idUsuarioLogado = parseInt(userId, 10); // Parse para número inteiro
      this.usuarioService.getOne(idUsuarioLogado).subscribe(
        (data) => {
          this.usuario = data;
        },
        (error) => {
          console.error('Erro ao carregar usuário:', error);
        }
      );
    } else {
      console.error('ID do usuário não encontrado no localStorage.');
    }
  }
}
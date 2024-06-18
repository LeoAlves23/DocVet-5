import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['veterinario', Validators.required] // Aqui ajuste conforme seu tipo de usuário padrão
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, senha, tipoUsuario } = this.loginForm.value;
      this.authService.login(email, senha, tipoUsuario).subscribe(
        response => {
          console.log('Resposta do login:', response);
          if (response.success) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userId', response.userId.toString());
            this.router.navigate(['/perfil']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          console.error('Erro ao fazer login:', error);
          this.errorMessage = 'Ocorreu um erro ao tentar fazer login.';
        }
      );
    }
  }
}
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-cadastro-dono-de-pet',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, MessagesModule, InputTextModule],
  templateUrl: './cadastro-dono-de-pet.component.html',
  styleUrls: ['./cadastro-dono-de-pet.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CadastroDonoDePetComponent implements OnInit {
  formulario!: FormGroup;
  messages: Message[] | undefined;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private messageService: MessageService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confsenha: ['', Validators.required]
    });
    this.messages = [
      { severity: 'success', detail: 'Info Message' }
    ];
  }

  isInvalid(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  submitForm(): void {
    if (this.formulario.valid) {
      // Faça a solicitação para a sua API usando HttpClient
      this.http.post('http://localhost:8080/api/v1/dono-pets/', this.formulario.value)
        .subscribe(
          response => {
            // Verifique o status da resposta da API
            if (response) {
              // O cadastro foi realizado com sucesso
              this.messageService.add({ severity: 'success', detail: 'Cadastro realizado com sucesso.' ,life: 2000});
            } else {
              // Ocorreu um erro durante o cadastro
              this.messageService.add({ severity: 'error', detail: 'Ocorreu um erro durante o cadastro. Tente novamente mais tarde.',life: 2000 });
            }
          },
          error => {
            // Ocorreu um erro de conexão com a API
            this.messageService.add({ severity: 'error', detail: 'Ocorreu um erro de conexão com a API. Verifique sua conexão de internet e tente novamente.',life: 2000 });
          }
        );
    } else {
      // Formulário inválido
      this.messageService.add({ severity: 'error', detail: 'Por favor, preencha todos os campos corretamente.' ,life: 2000});
    }
  }

  nameValidate(): void {
    const nomeControl = this.formulario.get('nome');
    if (nomeControl) {
      // Lógica de validação do nome
      if (nomeControl.value.length < 3) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Nome válido, realizar outra ação se necessário
      }
    }
  }

  cpfValidate(): void {
    const cpfControl = this.formulario.get('cpf');
    if (cpfControl) {
      // Lógica de validação do CPF
      if (cpfControl.value.length !== 11) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // CPF válido, realizar outra ação se necessário
      }
    }
  }

  celularValidate(): void {
    const telefoneControl = this.formulario.get('telefone');
    if (telefoneControl) {
      // Lógica de validação do telefone
      if (telefoneControl.value.length !== 11) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Telefone válido, realizar outra ação se necessário
      }
    }
  }

  emailValidate(): void {
    const emailControl = this.formulario.get('email');
    if (emailControl) {
      // Lógica de validação do email
      if (!/\S+@\S+\.\S+/.test(emailControl.value)) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Email válido, realizar outra ação se necessário
      }
    }
  }

  mainPasswordValidate(): void {
    const senhaControl = this.formulario.get('senha');
    if (senhaControl) {
      // Lógica de validação da senha principal
      if (senhaControl.value.length < 8) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Senha principal válida, realizar outra ação se necessário
      }
    }
  }

  comparePassword(): void {
    const senhaControl = this.formulario.get('senha');
    const confsenhaControl = this.formulario.get('confsenha');
    if (senhaControl && confsenhaControl) {
      // Lógica de comparação de senha
      if (senhaControl.value !== confsenhaControl.value) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Senhas coincidem, realizar outra ação se necessário
      }
    }
  }
}



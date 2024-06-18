import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { EspecialidadeService } from '../services/especialidades.service';
import { MultiSelectModule } from 'primeng/multiselect';
import { TipoAnimal } from '../models/tipo-animal.model';
import { TipoAnimalService } from '../services/tipo-animal.service';
import { Especialidade } from '../models/especialidade.model';
import { Convenio } from '../models/convenio.model';
import { ConvenioService } from '../services/convenio.service';

@Component({
  selector: 'app-cadastro-veterinario',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, MessagesModule, InputTextModule, MultiSelectModule],
  templateUrl: './cadastro-veterinario.component.html',
  styleUrls: ['./cadastro-veterinario.component.css']
})
export class CadastroVeterinarioComponent implements OnInit {
  formulario!: FormGroup;
  especialidades: Especialidade[] = [];
  tipoAnimais: TipoAnimal[] = [];
  convenios: Convenio[] = [];
  constructor(private http: HttpClient, private fb: FormBuilder, private convenioService: ConvenioService, private especialidadeService: EspecialidadeService, private router: Router, private tipoAnimalService: TipoAnimalService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      crmv: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      especialidade: ['', Validators.required],
      cidade: [''],
      descricao: [''],
      estado: ['', Validators.required],
      tipoAnimal: this.fb.array([]),
      convenios: this.fb.array([]),
      porte: this.fb.array([]),
      convenio: this.fb.array([]),
      valor: ['', [Validators.required]],
      foto: [''],
      senha: ['', Validators.required],
      confsenha: ['', Validators.required]
    });

    this.carregarEspecialidades();
    this.consultarTipoAnimal();
    this.consultarConvenios();
  }

  consultarTipoAnimal(){
    this.tipoAnimalService.getAll().toPromise().then((res?: TipoAnimal[]) => {
      this.tipoAnimais = res!;
    })
  }

  consultarConvenios(){
    this.convenioService.getAll().toPromise().then((res?: Convenio[]) => {
      this.convenios = res!;
    })
  }

  atualizarTipoAnimal(tipo: TipoAnimal, event: Event): void {
    const tiposAnimaisFormArray = this.formulario.get('tipoAnimal') as FormArray | null;
    const isChecked = (event.target as HTMLInputElement).checked;

    if (tiposAnimaisFormArray !== null) {
      if (isChecked) {
        tiposAnimaisFormArray.push(this.fb.control(tipo));
        // this.tipoAnimais = [tipo];
      } else {
        const index = tiposAnimaisFormArray.controls.findIndex(x => x.value.id === tipo.id);
        tiposAnimaisFormArray.removeAt(index);
      }
    }
  }

  atualizarConvenio(convenio: Convenio, event: Event): void {
    const conveniosSelecionadosFormArray = this.formulario.get('convenios') as FormArray;

    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      conveniosSelecionadosFormArray.push(this.fb.control(convenio));
    } else {
      const index = conveniosSelecionadosFormArray.controls.findIndex(x => x.value.id === convenio.id);
      conveniosSelecionadosFormArray.removeAt(index);
    }
  }




  onCheckboxChange(e: Event, controlName: string) {
    const target = e.target as HTMLInputElement;
    if (this.formulario && target) {
      const checkArray = this.formulario.get(controlName) as FormArray;
      if (checkArray) {
        if (target.checked) {
          checkArray.push(this.fb.control(target.value));
        } else {
          let i: number = 0;
          checkArray.controls.forEach((item: any) => {
            if (item.value === target.value) {
              checkArray.removeAt(i);
              return;
            }
            i++;
          });
        }
      }
    }
  }

  checkPasswords(group: FormGroup) {
    const passControl = group.get('senha');
    const confirmPassControl = group.get('confsenha');

    if (passControl && confirmPassControl) {
      const pass = passControl.value;
      const confirmPass = confirmPassControl.value;
      return pass === confirmPass ? null : { notSame: true };
    }

    return null;
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const formValueJson = JSON.stringify(this.formulario.value, null, 2);
      console.log(formValueJson);

      this.http.post('http://localhost:8080/api/v1/veterinarios/', this.formulario.value)
        .subscribe(
          response => {
            if (!response) {
              alert("Cadastro realizado com sucesso!");
              this.router.navigate(['/pesquisaveterinario']);
            } else {
              alert("Ocorreu um erro durante o cadastro. Tente novamente mais tarde.");
            }
          },
          error => {
            alert("Ocorreu um erro durante a comunicação com a API. Verifique sua conexão de internet e tente novamente.");
          }
        );
    } else {
      const messages = this.getValidationMessages();
      alert("Por favor, preencha todos os campos corretamente.\n" + messages.join('\n'));
    }
  }


  getValidationMessages(): string[] {
    const messages: string[] = [];
    const controls = this.formulario.controls;

    if (controls['nome']?.errors) {
      if (controls['nome'].errors['required']) messages.push('Nome é obrigatório.');
      if (controls['nome'].errors['minlength']) messages.push('Nome deve ter no mínimo 3 caracteres.');
    }

    if (controls['valor']?.errors) {
      if (controls['valor'].errors['required']) messages.push('Valor da consulta é obrigatório.');
    }

    if (controls['email']?.errors) {
      if (controls['email'].errors['required']) messages.push('Email é obrigatório.');
      if (controls['email'].errors['email']) messages.push('Email deve ser válido.');
    }

    if (controls['crmv']?.errors) {
      if (controls['crmv'].errors['required']) messages.push('CRMV é obrigatório.');
      if (controls['crmv'].errors['minlength']) messages.push('CRMV deve ter no mínimo 11 caracteres.');
      if (controls['crmv'].errors['maxlength']) messages.push('CRMV deve ter no máximo 15 caracteres.');
    }

    if (controls['cpf']?.errors) {
      if (controls['cpf'].errors['required']) messages.push('CPF é obrigatório.');
      if (controls['cpf'].errors['minlength']) messages.push('CPF deve ter exatamente 11 caracteres.');
      if (controls['cpf'].errors['maxlength']) messages.push('CPF deve ter exatamente 11 caracteres.');
    }

    if (controls['telefone']?.errors) {
      if (controls['telefone'].errors['required']) messages.push('Telefone é obrigatório.');
      if (controls['telefone'].errors['minlength']) messages.push('Telefone deve ter no mínimo 11 caracteres.');
    }

    if (controls['especialidade']?.errors) {
      if (controls['especialidade'].errors['required']) messages.push('Especialidade é obrigatória.');
    }

    if (controls['estado']?.errors) {
      if (controls['estado'].errors['required']) messages.push('Estado é obrigatório.');
    }

    if (controls['senha']?.errors) {
      if (controls['senha'].errors['required']) messages.push('Senha é obrigatória.');
    }

    if (controls['confsenha']?.errors) {
      if (controls['confsenha'].errors['required']) messages.push('Confirmação de senha é obrigatória.');
    }

    const passwordError = this.checkPasswords(this.formulario);
    if (passwordError) {
      messages.push('As senhas não coincidem.');
    }

    return messages;
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

  carregarEspecialidades(): void {
    this.especialidadeService.consultar()
      .subscribe(especialidades => {
        this.especialidades = especialidades;
      });
  }

}

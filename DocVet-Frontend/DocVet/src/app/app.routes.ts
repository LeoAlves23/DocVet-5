import { Routes } from '@angular/router';
import { CadastroDonoDePetComponent } from './cadastro-dono-de-pet/cadastro-dono-de-pet.component';
import { CadastroVacinaComponent } from './cadastro-vacina/cadastro-vacina.component';
import { CadastroVeterinarioComponent } from './cadastro-veterinario/cadastro-veterinario.component';
import { GerenciarCadastrosComponent } from './gerenciar-cadastros/gerenciar-cadastros.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PesquisaVeterinarioComponent } from './pesquisa-veterinario/pesquisa-veterinario.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'gerenciarcadastros', component: GerenciarCadastrosComponent },
  { path: 'cadastrovacina', component: CadastroVacinaComponent },
  { path: 'cadastrodonopet', component: CadastroDonoDePetComponent }, 
  { path: 'cadastroveterinario', component: CadastroVeterinarioComponent }, 
  { path: 'pesquisaveterinario', component: PesquisaVeterinarioComponent },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


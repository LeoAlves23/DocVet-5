import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DocVet';
}

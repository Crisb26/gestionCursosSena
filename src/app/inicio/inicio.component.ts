import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-inicio',
  imports: [NavBarComponent, PieDePaginaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  mensajeBienvenida = 'Bienvenido a la plataforma de gestión de cursos del SENA';
  numeroUsuariosActivos = 1250;
  cursosDisponibles = 45;
}
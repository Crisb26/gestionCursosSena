import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, NavBarComponent, PieDePaginaComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos = [
      {
      id: 1,
      titulo: 'Desarrollo Web Frontend',
      descripcion: 'Aprende HTML, CSS y JavaScript desde cero',
      imagen: '/assets/curso-frontend.png',
      duracion: '6 meses'
    },
    {
      id: 2,
      titulo: 'Análisis y Desarrollo de Software',
      descripcion: 'Programa aplicaciones completas con tecnologías modernas',
      imagen: '/assets/curso-software.png',
      duracion: '24 meses'
    },
    {
      id: 3,
      titulo: 'Base de Datos',
      descripcion: 'Diseño y administración de bases de datos relacionales',
      imagen: '/assets/curso-bd.png',
      duracion: '4 meses'
    }
  ];

}
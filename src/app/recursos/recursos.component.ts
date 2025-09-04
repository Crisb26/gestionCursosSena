import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-recursos',
  imports: [CommonModule, NavBarComponent, PieDePaginaComponent],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.scss'
})
export class RecursosComponent {
  recursos = [
    {
      id: 1,
      nombre: 'Guía de Angular',
      tipo: 'PDF',
      descripcion: 'Documentación completa sobre Angular para principiantes',
      icono: '📄'
    },
    {
      id: 2,
      nombre: 'Video Tutoriales HTML/CSS',
      tipo: 'Video',
      descripcion: 'Serie de videos para aprender HTML y CSS desde cero',
      icono: '🎥'
    },
    {
      id: 3,
      nombre: 'Ejercicios de JavaScript',
      tipo: 'Práctica',
      descripcion: 'Ejercicios prácticos para mejorar tus habilidades en JS',
      icono: '💻'
    },
    {
      id: 4,
      nombre: 'Manual de Base de Datos',
      tipo: 'PDF',
      descripcion: 'Guía completa para diseño de bases de datos relacionales',
      icono: '🗄️'
    }
  ];
}
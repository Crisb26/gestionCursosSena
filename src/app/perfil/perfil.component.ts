import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule, NavBarComponent, PieDePaginaComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  perfilUsuario = {
    nombre: 'Cristopher',
    apellido: 'Bueno',
    email: 'Crisb@sena.edu.co',
    documento: '123456789',
    telefono: '3100000000',
    fechaNacimiento: '1993-02-26'
  };

  cursosInscritos = [
    {
      nombre: 'Desarrollo Web Frontend',
      progreso: 100,
      estado: 'Completado',
      fechaInicio: '2024-06-01'
    },
    {
      nombre: 'Analisis y Desarrollo de Software',
      progreso: 75,
      estado: 'En progreso',
      fechaInicio: '2024-06-01'
    },
    {
      nombre: 'Bases de Datos',
      progreso: 100,
      estado: 'Completado',
      fechaInicio: '2024-06-01'
    }
  ];

  modoEdicion = false;

  activarEdicion() {
    this.modoEdicion = true;
  }

  guardarCambios() {
    this.modoEdicion = false;
    console.log('Perfil actualizado:', this.perfilUsuario);
  }

  cancelarEdicion() {
    this.modoEdicion = false;
  }
}
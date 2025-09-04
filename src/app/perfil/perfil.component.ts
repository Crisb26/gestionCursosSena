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
      nombre: 'Base de Datos Relacional y no Relacional',
      progreso: 75,
      estado: 'En progreso',
      fechaInicio: '2025-09-01'
    },
    {
      nombre: 'Enfermeria',
      progreso: 100,
      estado: 'Completado',
      fechaInicio: '2010-03-01'
    },
    {
      nombre: 'Análisis y Desarrollo de Software',
      progreso: 30,
      estado: 'En progreso',
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
    // en este iria la logica para guardar en el servidor
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    //aqui se podria recargar los datos originales del servidor
  }
}
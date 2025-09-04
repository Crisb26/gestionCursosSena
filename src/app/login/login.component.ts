import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule, NavBarComponent, PieDePaginaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  datosUsuario = {
    email: '',
    contrasena: ''
  };

  mensajeError = '';
  cargando = false;

  iniciarSesion() {
    this.cargando = true;
    this.mensajeError = '';

    // Simulación de validación
    setTimeout(() => {
      if (this.datosUsuario.email && this.datosUsuario.contrasena) {
        console.log('Iniciando sesión con:', this.datosUsuario);
        // Aquí iría la lógica real de autenticación
      } else {
        this.mensajeError = 'Por favor, completa todos los campos';
      }
      this.cargando = false;
    }, 1500);
  }

  limpiarFormulario() {
    this.datosUsuario = { email: '', contrasena: '' };
    this.mensajeError = '';
  }
}
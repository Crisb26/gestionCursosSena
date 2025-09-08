import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PieDePaginaComponent } from '../shared/components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-ayuda',
  imports: [CommonModule, NavBarComponent, PieDePaginaComponent],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.scss'
})
export class AyudaComponent {
  preguntasFrecuentes = [
    {
      pregunta: '¿Como puedo inscribirme en un curso?',
      respuesta: 'Para inscribirte en un curso, debes crear una cuenta, ir a la seccion de cursos, seleccionar el curso de tu interes y hacer clic en "Inscribirse"...'
    },
    {
      pregunta: '¿Cuales son los requisitos para los cursos?',
      respuesta: 'Los requisitos varian segun el curso. Generalmente necesitas tener conocimientos basicos en informatica y cumplir con la edad minima que es de 16 años.'
    },
    {
      pregunta: '¿Como accedo a los recursos del curso?',
      respuesta: 'Una vez inscrito en un curso, puedes acceder a ellos desde la seccion "Recursos" en tu perfil de usuario.'
    },
    {
      pregunta: '¿Los cursos tienen certificacion?',
      respuesta: 'Si, todos nuestros cursos otorgan certificacion oficial del SENA al completar exitosamente el programa de estudios.'
    }
  ];

  contactoSoporte = {
    telefono: '01 8000 000000',
    email: 'soporte@sena.edu.co',
    horarios: 'Lunes a Viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 5:00 PM'
  };
}
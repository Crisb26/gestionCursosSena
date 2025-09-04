import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-de-pagina',
  imports: [],
  templateUrl: './pie-de-pagina.component.html',
  styleUrl: './pie-de-pagina.component.scss'
})
export class PieDePaginaComponent {
  anioActual = new Date().getFullYear();
}
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { RecursosComponent } from './recursos/recursos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
];
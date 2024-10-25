import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Ruta raíz para el componente principal
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redireccionar cualquier URL no válida a la raíz
];

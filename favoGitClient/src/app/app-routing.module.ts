import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},


];

@NgModule({
    imports: [
     CommonModule,
     RouterModule.forRoot(appRoutes)],  // Para debug],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

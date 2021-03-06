import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'userProfile', component: ProfileViewComponent }


];

@NgModule({
    imports: [
     CommonModule,
     RouterModule.forRoot(appRoutes)],  // Para debug],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { SearchComponent } from './components/search/search.component';
import { CardUserComponent } from './components/card-user/card-user.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SearchViewComponent,
    SearchComponent,
    CardUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

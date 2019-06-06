import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { SearchComponent } from './components/search/search.component';
import { CardUserGitHubComponent } from './components/card-user-git-hub/card-user-git-hub.component';
import { HoverButtonComponent } from './components/hover-button/hover-button.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SearchViewComponent,
    SearchComponent,
    CardUserGitHubComponent,
    HoverButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

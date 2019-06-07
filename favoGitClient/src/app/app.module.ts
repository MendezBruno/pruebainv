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
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { ModalComponent } from './views/modal/modal.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FloatActionButtonComponent } from './components/float-action-button/float-action-button.component';
import { TrashButtonComponent } from './components/trash-button/trash-button.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {userReducer} from '../state/reducers/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SearchViewComponent,
    SearchComponent,
    CardUserGitHubComponent,
    HoverButtonComponent,
    ProfileViewComponent,
    ModalComponent,
    FavoriteListComponent,
    FloatActionButtonComponent,
    TrashButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
      favorite: favoriteReducer
    }),
    EffectsModule.forRoot([UsersEffects, AppEffects]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

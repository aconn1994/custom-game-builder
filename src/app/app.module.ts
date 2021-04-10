import { BaseModule } from './features/modules/base/base.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './modules/ng-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Services } from './features/services/services';
import { environment } from 'src/environments/environment';
import { FormComponentsModule } from './features/shared/lib/form/form-components.module';
import { UiModule } from './features/shared/lib/ui/ui.module';
import { GamesModule } from './features/modules/games/games.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormComponentsModule,
    UiModule,
    BaseModule,
    GamesModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

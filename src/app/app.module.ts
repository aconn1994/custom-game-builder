import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './modules/ng-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomGameComponent } from './features/modules/games/custom-game/custom-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Services } from './features/services/services';
import { environment } from 'src/environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './features/modules/base/navbar/navbar.component';
import { HomeComponent } from './features/modules/base/home/home.component';
import { DisplayGameDataComponent } from './features/shared/lib/display-game-data/display-game-data.component';
import { RainbowSixSiegeComponent } from './features/modules/games/rainbow-six-siege/rainbow-six-siege.component';
import { MapComponent } from './features/shared/lib/form/map/map.component';
import { PlayersComponent } from './features/shared/lib/form/players/players.component';
import { NavigationButtonsComponent } from './features/shared/lib/navigation-buttons/navigation-buttons.component';
import { FilterSelectComponent } from './features/shared/lib/filter-select/filter-select.component';
import { RoleComponent } from './features/shared/lib/form/role/role.component';
import { LeagueOfLegendsComponent } from './features/modules/games/league-of-legends/league-of-legends.component';
import { CounterStrikeGlobalOffensiveComponent } from './features/modules/games/counter-strike-global-offensive/counter-strike-global-offensive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomGameComponent,
    HomeComponent,
    PlayersComponent,
    DisplayGameDataComponent,
    NavigationButtonsComponent,
    RainbowSixSiegeComponent,
    MapComponent,
    FilterSelectComponent,
    RoleComponent,
    LeagueOfLegendsComponent,
    CounterStrikeGlobalOffensiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FlexLayoutModule
  ],
  providers: [
  Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

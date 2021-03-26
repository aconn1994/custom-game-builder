import { CounterStrikeGlobalOffensiveComponent } from './features/modules/games/counter-strike-global-offensive/counter-strike-global-offensive.component';
import { LeagueOfLegendsComponent } from './features/modules/games/league-of-legends/league-of-legends.component';
import { RainbowSixSiegeComponent } from './features/modules/games/rainbow-six-siege/rainbow-six-siege.component';
import { CustomGameComponent } from './features/modules/games/custom-game/custom-game.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/modules/base/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'custom-game', component: CustomGameComponent },
  { path: 'r6siege', component: RainbowSixSiegeComponent },
  { path: 'lol', component: LeagueOfLegendsComponent },
  { path: 'csgo', component: CounterStrikeGlobalOffensiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

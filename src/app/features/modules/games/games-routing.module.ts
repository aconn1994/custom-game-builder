import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CounterStrikeGlobalOffensiveComponent } from './counter-strike-global-offensive/counter-strike-global-offensive.component';
import { CustomGameComponent } from './custom-game/custom-game.component';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import { RainbowSixSiegeComponent } from './rainbow-six-siege/rainbow-six-siege.component';

const routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '', pathMatch: 'full'},
            { path: 'custom-game', component: CustomGameComponent },
            { path: 'r6siege', component: RainbowSixSiegeComponent },
            { path: 'lol', component: LeagueOfLegendsComponent },
            { path: 'csgo', component: CounterStrikeGlobalOffensiveComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GamesRoutingModule {}
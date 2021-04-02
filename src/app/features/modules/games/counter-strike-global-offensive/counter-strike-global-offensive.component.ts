import { CsgoFilter, CsgoInfo } from './../../../shared/constants/models/games/csgo.model';
import { CounterStrikeGlobalOffensiveService } from './../../../services/counter-strike-global-offensive.service';
import { FormArray } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CsgoMap } from 'src/app/features/shared/constants/models/games/csgo.model';

@Component({
  selector: 'counter-strike-global-offensive',
  templateUrl: './counter-strike-global-offensive.component.html',
  styleUrls: ['./counter-strike-global-offensive.component.scss']
})
export class CounterStrikeGlobalOffensiveComponent {

  playersForTeams: FormArray;
  mapsData: Observable<CsgoMap[]>;
  filters: Observable<CsgoFilter>;
  info: Observable<CsgoInfo>;
  mapsForGame: Array<string>;

  constructor(
    private csgoService: CounterStrikeGlobalOffensiveService
  ) {
    this.info = this.csgoService.getCsgoInfo();
    this.mapsData = this.csgoService.getMaps(null);
    this.filters = this.csgoService.getCsgoFilters();
  }

  updatePlayersList(players: any) {
    this.playersForTeams = players;
  }

  getFilteredMaps(filter) {
    this.mapsData = this.csgoService.getMaps(filter);
  }

  pickedMaps(maps) {
    this.mapsForGame = maps;
  }

}

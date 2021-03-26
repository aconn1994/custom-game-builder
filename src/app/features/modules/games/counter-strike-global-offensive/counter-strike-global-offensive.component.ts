import { CounterStrikeGlobalOffensiveService } from './../../../services/counter-strike-global-offensive.service';
import { FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'counter-strike-global-offensive',
  templateUrl: './counter-strike-global-offensive.component.html',
  styleUrls: ['./counter-strike-global-offensive.component.scss']
})
export class CounterStrikeGlobalOffensiveComponent {

  playersForTeams: FormArray;
  mapsData: any;
  filters: any;
  mapsForGame: Array<string>;

  constructor(
    private csgoService: CounterStrikeGlobalOffensiveService
  ) {
    this.mapsData = this.csgoService.getMaps(null);
    this.filters = this.csgoService.getDataTypes('filters');
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

import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { RainbowSixSiegeService } from 'src/app/features/services/rainbow-six-siege.service';

@Component({
  selector: 'rainbow-six-siege',
  templateUrl: './rainbow-six-siege.component.html',
  styleUrls: ['./rainbow-six-siege.component.scss']
})
export class RainbowSixSiegeComponent {

  playersForTeams: FormArray;
  mapsData: any;
  filters: any;
  mapsForGame: Array<string>;

  constructor(
    private r6Service: RainbowSixSiegeService
  ) {
    this.mapsData = this.r6Service.getMaps(null);
    this.filters = this.r6Service.getDataTypes('filters');
  }

  updatePlayersList(players: any) {
    this.playersForTeams = players;
  }

  getFilteredMaps(filter) {
    this.mapsData = this.r6Service.getMaps(filter);
  }

  pickedMaps(maps) {
    this.mapsForGame = maps;
  }


}

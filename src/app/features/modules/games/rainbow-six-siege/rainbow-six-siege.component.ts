import { Observable } from 'rxjs';
import { R6SiegeMap, R6SiegeFilter, R6SiegeInfo } from './../../../shared/constants/models/games/r6-siege.model';
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
  mapsData: Observable<R6SiegeMap[]>;
  filters: Observable<R6SiegeFilter>;
  mapsForGame: Array<string>;
  info: Observable<R6SiegeInfo>;

  constructor(
    private r6Service: RainbowSixSiegeService
  ) {
    this.info = this.r6Service.getR6SiegeInfo();
    this.mapsData = this.r6Service.getMaps(null);
    this.filters = this.r6Service.getR6SiegeFilters();
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

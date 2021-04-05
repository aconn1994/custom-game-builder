import { RandomService } from '../../../../services/random.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'display-game-data',
  templateUrl: './display-game-data.component.html',
  styleUrls: ['./display-game-data.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DisplayGameDataComponent implements OnInit {
  @Input() public playersForTeams: FormArray;
  @Input() public mapPool?: any;

  teamOne: Array<string>;
  teamTwo: Array<string>;
  teamArray = ['teamOne', 'teamTwo'];

  map: any;
  table: any;
  playersAreScrambled = false;

  constructor(
    private randomService: RandomService
  ) {
    this.table = [];
  }

  ngOnInit(): void {
    this.teamOne = [];
    this.teamTwo = [];
  }

  scramble() {
    this.playersAreScrambled = true;
    this.playerScramble();

    if (this.mapPool) {
      this.mapScramble();
    }
  }

  chooseTeam(player) {
    if (this.teamOne.length === this.teamTwo.length) {
      const randomTeam = this.randomService.randomValue(this.teamArray);
      if (randomTeam === 'teamOne') {
        this.teamOne.push(player);
      } else if (randomTeam === 'teamTwo') {
        this.teamTwo.push(player);
      }
    } else if (this.teamOne.length > this.teamTwo.length) {
      this.teamTwo.push(player);
    } else if (this.teamTwo.length > this.teamOne.length) {
      this.teamOne.push(player);
    }
  }

  clear() {
    this.teamOne = [];
    this.teamTwo = [];
  }

  playerScramble() {
    const i = 0;
    this.clear();
    const players = this.playersForTeams.getRawValue();

    while (i < players.length) {
      const player = this.randomService.randomValue(players);
      this.chooseTeam(player);
      players.splice(players.findIndex(x => x === player), 1);
    }

  }

  mapScramble() {
    const checkedMap = [];

    for (const key of Object.keys(this.mapPool)) {
      if (this.mapPool[key] === true) {
        checkedMap.push(key);
      }
    }
    const map = this.randomService.randomValue(checkedMap);
    this.map = map;
  }

}

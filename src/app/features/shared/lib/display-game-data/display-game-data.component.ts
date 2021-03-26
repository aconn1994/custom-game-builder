import { RandomService } from '../../../services/random.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'display-game-data',
  templateUrl: './display-game-data.component.html',
  styleUrls: ['./display-game-data.component.scss']
})
export class DisplayGameDataComponent implements OnInit {
  @Input() public playersForTeams: FormArray;
  @Input() public mapPool?: any;

  playersAreScrambled = false;
  teamOne: Array<string>;
  teamTwo: Array<string>;
  map: any;

  constructor(
    private randomService: RandomService
  ) { }

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
    const teamArray = ['teamOne', 'teamTwo'];
    if (this.teamOne.length === this.teamTwo.length) {
      const randomTeam = this.randomService.randomValue(teamArray);
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

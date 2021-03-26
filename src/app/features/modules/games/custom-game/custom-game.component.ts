import { FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'custom-game',
  templateUrl: './custom-game.component.html',
  styleUrls: ['./custom-game.component.scss']
})
export class CustomGameComponent {

  playersForTeams: FormArray;

  updatePlayersList(players: any) {
    this.playersForTeams = players;
  }

}

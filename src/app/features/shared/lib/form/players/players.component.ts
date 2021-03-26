import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Input() public showRoles?: boolean;
  @Input() public roleList?: any;
  @Output() public playersList = new EventEmitter();

  players = new FormArray([]);
  roleChecked = false;


  constructor() { }

  ngOnInit(): void {
    this.addPlayer();
  }

  addPlayer() {
    this.players.push(new FormControl(''));
  }

  removePlayer(index) {
    this.players.removeAt(index);
  }

  updateList() {
    this.playersList.emit(this.players);
  }

  toggleRoles() {
    this.roleChecked = !this.roleChecked;
  }
}

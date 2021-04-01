import { FormArray } from '@angular/forms';
import { PlayerEnterDialogComponent } from './../player-enter-dialog/player-enter-dialog.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'player-enter',
  templateUrl: './player-enter.component.html',
  styleUrls: ['./player-enter.component.scss']
})
export class PlayerEnterComponent {
  @Input() public showRoles?: boolean;
  @Input() public roleList?: any;
  @Output() public playersList = new EventEmitter();

  playerList: FormArray;
  playersEntered = false;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(PlayerEnterDialogComponent, {
      maxWidth: '400px',
      maxHeight: '600px',
      data: { playerList: this.playerList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playersEntered = true;
        this.playerList = result;
        this.playersList.emit(this.playerList);
      }
    });
  }
}

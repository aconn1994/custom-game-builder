import { DialogData } from '../../../../constants/models/dialogs/dialog.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'player-enter-dialog',
  templateUrl: './player-enter-dialog.component.html',
  styleUrls: ['./player-enter-dialog.component.scss']
})
export class PlayerEnterDialogComponent implements OnInit {
  playerList: FormArray;
  // roleChecked = false;

  constructor(
    public dialogRef: MatDialogRef<PlayerEnterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.playerList) {
      this.playerList = data.playerList;
    } else {
      this.playerList = new FormArray([]);
    }
  }

  ngOnInit(): void {
    if (!!!this.data.playerList) {
      this.addPlayer();
    }
  }

  addPlayer() {
    this.playerList.push(new FormControl(''));
  }

  removePlayer(index) {
    this.playerList.removeAt(index);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // updateList() {
  //   this.playersList.emit(this.players);
  // }

  // toggleRoles() {
  //   this.roleChecked = !this.roleChecked;
  // }

}

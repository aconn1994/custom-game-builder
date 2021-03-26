import { LeagueOfLegendsService } from './../../../services/league-of-legends.service';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.scss']
})
export class LeagueOfLegendsComponent implements OnInit {

  playersForTeams: FormArray;
  roleData: any;

  constructor(
    private lolService: LeagueOfLegendsService
  ) {
    this.roleData = this.lolService.getDataTypes('roles');
  }

  ngOnInit(): void {
  }

  updatePlayersList(players: any) {
    this.playersForTeams = players;
  }

}

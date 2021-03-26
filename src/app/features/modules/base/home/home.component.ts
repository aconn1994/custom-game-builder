import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigationData: any;
  gameData: any;

  constructor(
    private configService: ConfigService
  ) {
    this.navigationData = this.configService.getNavigationData();
  }

  ngOnInit(): void {
    this.navigationData.subscribe(game => {
      this.gameData = game.games;
    });
  }

}

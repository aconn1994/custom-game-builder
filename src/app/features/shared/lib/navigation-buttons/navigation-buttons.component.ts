import { ConfigService } from '../../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent implements OnInit {
  navigationData: any;
  gameData: any;
  extrasData: any;

  constructor(
    private configService: ConfigService
  ) {
    this.navigationData = this.configService.getNavigationData();
  }

  ngOnInit(): void {
    this.navigationData.subscribe(data => {
      this.gameData = data.games;
      this.extrasData = data.extras;
    });
  }

  public listOrder(index: number, list: any) {
    return list.order;
  }

}

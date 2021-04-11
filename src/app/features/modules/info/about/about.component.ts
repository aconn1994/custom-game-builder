import { Observable } from 'rxjs';
import { SystemOptions } from './../../../shared/constants/models/server/server.model';
import { SystemOptionsService } from './../../../services/system-options.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  systemOptions: Observable<SystemOptions>;

  constructor(
    private systemOptionsService: SystemOptionsService
  ) {
    this.systemOptions = this.systemOptionsService.getSystemOptions();
  }

  ngOnInit(): void {
  }

}

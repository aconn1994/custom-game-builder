import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  @Input() public filters: Observable<any>;
  @Input() public type: string;
  @Output() filter = new EventEmitter();
  
  filterList = new FormControl();
  data: any;
  

  constructor() { }

  ngOnInit(): void {
    this.filters.subscribe(filters => {
      if (this.type === 'map') {
        this.data = filters.map;
      }
    })
  }

  sendFilter() {
    this.filter.emit(this.filterList.value);
  }

}

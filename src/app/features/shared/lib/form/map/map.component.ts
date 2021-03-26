import { Observable } from 'rxjs';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() public mapList: Observable<any[]>;
  @Input() public filterTypes: Observable<any>;
  @Input() public type: 'maps' | 'operators';

  @ViewChild('map') map: ElementRef;

  @Output() public filter = new EventEmitter();
  @Output() public maps = new EventEmitter();

  mapData: any;
  form: FormGroup;
  allChecked = false;
  showMaps = false;

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnChanges(): void {
    this.mapList.subscribe(maps => {
      this.mapData = maps;
      for (const map of maps) {
        (this.form.addControl(map.name, new FormControl(false)));
      }
    });
  }

  filterData(x) {
    this.clear();
    this.filter.emit(x);
  }

  updateForm(map: string) {
    const mapForForm = this.form.get(map).value;
    // console.log(mapForForm);

    if (mapForForm === false) {
      this.form.get(map).setValue(true);
    } else if (mapForForm === true) {
      this.form.get(map).setValue(false);
    }

    // console.log(this.form.value);
    this.maps.emit(this.form.value);
  }

  checkAll() {
    this.allChecked = !!!this.allChecked;

    if (this.allChecked) {
      this.mapData.forEach(map => {
        this.form.get(map.name).setValue(true);
      });
    }
    if (!!!this.allChecked) {
      this.mapData.forEach(map => {
        this.form.get(map.name).setValue(false);
      });
    }
    this.maps.emit(this.form.value);
  }

  showMapForm() {
    this.showMaps = !!!this.showMaps;
  }

  clear() {
    // this.form.clear();
  }

}

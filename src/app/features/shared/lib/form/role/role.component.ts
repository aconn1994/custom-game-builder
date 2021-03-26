import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnChanges {
  @Input() public roleList: any;
  @Output() public roles? = new EventEmitter();

  form: FormArray;
  roleData: Array<string>;


  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.array([]);
  }

  ngOnChanges(): void {
    this.roleList.subscribe(roles => {
      this.roleData = roles.roles
    })
  }

  addToForm(role: string) {
    this.form.push(new FormControl(role));
    this.roles.emit(this.form.value);
  }

}

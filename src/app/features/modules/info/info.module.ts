import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './../../../modules/ng-material.module';
import { InfoRoutingModule } from './info-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './info-components';

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InfoModule { }

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMaterialModule } from "src/app/modules/ng-material.module";
import { UiComponents } from "./ui-components";

@NgModule({
    declarations: [
        ...UiComponents,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgMaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ...UiComponents
    ],
    providers: []
})
export class UiModule {}
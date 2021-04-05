import { UiModule } from './../ui/ui.module';
import { NgMaterialModule } from './../../../../modules/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { FormComponents } from "./form-components";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        ...FormComponents,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgMaterialModule,
        ReactiveFormsModule,
        UiModule
    ],
    exports: [
        ...FormComponents
    ],
    providers: []
})
export class FormComponentsModule {}
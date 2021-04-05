import { FormComponentsModule } from './../../shared/lib/form/form-components.module';
import { RouterModule } from '@angular/router';
import { UiModule } from './../../shared/lib/ui/ui.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgMaterialModule } from "src/app/modules/ng-material.module";
import { BaseComponents } from "./base-components";

@NgModule({
    declarations: [
        ...BaseComponents,
    ],
    imports: [
        BrowserModule,
        NgMaterialModule,
        UiModule,
        RouterModule,
        FormComponentsModule
    ],
    exports: [
        ...BaseComponents
    ],
    providers: []
})
export class BaseModule {}
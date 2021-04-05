import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgMaterialModule } from "src/app/modules/ng-material.module";
import { UiComponents } from "./ui-components";

@NgModule({
    declarations: [
        ...UiComponents,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgMaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        ...UiComponents
    ],
    providers: []
})
export class UiModule {}
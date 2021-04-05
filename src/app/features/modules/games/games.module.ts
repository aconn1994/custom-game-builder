import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgMaterialModule } from "src/app/modules/ng-material.module";
import { FormComponentsModule } from "../../shared/lib/form/form-components.module";
import { UiModule } from "../../shared/lib/ui/ui.module";
import { GamesComponents } from "./games-components";

@NgModule({
    declarations: [
        ...GamesComponents,
    ],
    imports: [
        BrowserModule,
        NgMaterialModule,
        UiModule,
        RouterModule,
        FormComponentsModule
    ],
    exports: [
        ...GamesComponents
    ],
    providers: []
})
export class GamesModule {}
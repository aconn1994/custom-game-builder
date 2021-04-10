import { GamesRoutingModule } from './games-routing.module';
import { UiModule } from './../../shared/lib/ui/ui.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgMaterialModule } from "src/app/modules/ng-material.module";
import { FormComponentsModule } from "../../shared/lib/form/form-components.module";
import { GamesComponents } from "./games-components";

@NgModule({
    declarations: [
        ...GamesComponents,
    ],
    imports: [
        BrowserModule,
        NgMaterialModule,
        FormComponentsModule,
        UiModule,
        GamesRoutingModule
    ],
    exports: [
        ...GamesComponents
    ],
    providers: []
})
export class GamesModule {}
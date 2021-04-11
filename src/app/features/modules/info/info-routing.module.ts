import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '', pathMatch: 'full'},
            { path: 'about', component: AboutComponent },
            { path: 'feedback', component: FeedbackComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class InfoRoutingModule {}
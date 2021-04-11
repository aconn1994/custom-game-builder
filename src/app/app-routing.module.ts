import { SubmitComponent } from './features/modules/base/submit/submit.component';
import { ErrorComponent } from './features/modules/base/error/error.component';
import { HomeComponent } from './features/modules/base/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submit', component: SubmitComponent },
  {
    path: 'game',
    loadChildren: () => import('./features/modules/games/games-routing.module').then(m => m.GamesRoutingModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./features/modules/info/info-routing.module').then(m => m.InfoRoutingModule)
  },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

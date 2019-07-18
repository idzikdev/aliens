import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AlienListComponent} from './aliens/alien-list/alien-list.component';
import {ShipListComponent} from './aliens/ship-list/ship-list.component';

const APP_ROUTES: Route [] = [
  {path: '', pathMatch: 'full', redirectTo: 'aliens'},
  {path: 'aliens', component: AlienListComponent},
  {path: 'ships', component: ShipListComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './Components/home/home';
import { Room } from './Components/room/room';
import { Game } from './Components/game/game';
import { Login } from './Components/login/login';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'room',
    component: Room,
  },
  {
    path: 'game',
    component: Game,
  },
  {
    path: 'login',
    component: Login,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

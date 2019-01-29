import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import AppRoutes from './app-routes';

const routes: Routes = [
  ...AppRoutes
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

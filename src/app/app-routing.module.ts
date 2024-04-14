import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaplePNGComponent } from './taple-png/taple-png.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TaplePNGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

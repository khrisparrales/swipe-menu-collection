import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtaskComponent } from "./components/viewtask/viewtask.component";

const routes: Routes = [
  { path: 'view-task', component: ViewtaskComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'view-task' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

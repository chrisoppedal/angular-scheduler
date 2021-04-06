import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScheduleContainerComponent} from './schedule-container/schedule-container.component';

const routes: Routes = [{path: 'scheduler', component: ScheduleContainerComponent}, { path: '', redirectTo: 'scheduler', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

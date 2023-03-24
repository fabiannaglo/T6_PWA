import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthOutputComponent } from './month-output/month-output.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { WeekOutputComponent } from './week-output/week-output.component';


const routes: Routes = [
  { path: 'wochenansicht', component: WeekOutputComponent},
  { path: 'monatsansicht', component: MonthOutputComponent},
  { path: 'eingabe', component: TimeInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

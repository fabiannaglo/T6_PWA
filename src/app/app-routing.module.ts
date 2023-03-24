import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeInputComponent } from './time-input/time-input.component';


const routes: Routes = [
  { path: 'eingabe', component: TimeInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

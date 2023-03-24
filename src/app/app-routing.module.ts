import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthOutputComponent } from './month-output/month-output.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { WeekOutputComponent } from './week-output/week-output.component';
import { Cookie } from 'ng2-cookies';


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
  constructor() {
    this.checkDarkmode();
  }

  checkDarkmode(){
    if(Cookie.get("darkmode") == "1"){
      document.documentElement.classList.add("darkmode");
      document.querySelector('meta[name="theme-color"]')!.setAttribute('content', '#3de8a4');
    }
    else{
      document.documentElement.classList.remove("darkmode");
      document.querySelector('meta[name="theme-color"]')!.setAttribute('content', '#c2185b');
    }

    window.setTimeout(function(){
      document.documentElement.classList.add("transition");
    },300)
  }
}

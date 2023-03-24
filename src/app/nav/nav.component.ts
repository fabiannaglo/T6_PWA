import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Time } from '../time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  timeInput: Time[] = [];
  deferredPrompt: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private timeService: TimeService, private breakpointObserver: BreakpointObserver) {
 
  }

  clearInputs(){
    this.timeService.clearAll();
    window.location.reload();
  }

  changeDarkmode(){
    document.documentElement.classList.toggle("darkmode");
  }
}

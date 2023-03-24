import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Time } from '../time';
import { TimeService } from '../time.service';
import { Cookie } from 'ng2-cookies';

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

  async refresh(){
    this.timeInput = await this.timeService.getAll();
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  changeDarkmode(){
    document.documentElement.classList.toggle("darkmode");
    
    if(document.documentElement.classList.contains("darkmode")){
      Cookie.set("darkmode", "1", 365);
      document.querySelector('meta[name="theme-color"]')!.setAttribute('content', '#3de8a4');
    }
    else{
      Cookie.set("darkmode", "0", 365);
      document.querySelector('meta[name="theme-color"]')!.setAttribute('content', '#c2185b');
    }
  }
}

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { WeekOutputComponent } from './week-output/week-output.component';
import { MonthOutputComponent } from './month-output/month-output.component';
import { TimeInputComponent } from './time-input/time-input.component';

@NgModule({
  declarations: [
    AppComponent, 
    TimeInputComponent,
    WeekOutputComponent,
    MonthOutputComponent,
    NavComponent    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates.subscribe((evt) => {
      if (evt.type === 'VERSION_READY' && confirm("Neue Version verfügbar! Jetzt neuladen?")) {
        location.reload();
      }
    });
  }
}

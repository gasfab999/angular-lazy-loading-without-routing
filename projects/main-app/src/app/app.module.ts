import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceHelperService } from 'service-helper';
import { UiHelperOneService } from 'ui-helper/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // ServiceHelperModule,
    // UiHelperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private serviceHelperService: ServiceHelperService,
    private uiHelperOneService: UiHelperOneService,
  ) {
    console.log(this.serviceHelperService.label)
    console.log(this.uiHelperOneService.config)
  }
}

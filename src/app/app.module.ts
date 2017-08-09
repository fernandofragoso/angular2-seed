import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberListComponent } from './number-list/number-list.component';
import { NumberComponent } from './number/number.component';

import { NumberServiceService } from './number-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NumberListComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NumberServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

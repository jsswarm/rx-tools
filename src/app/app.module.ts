import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';
import {RxTrackerModule} from '../../projects/rx-tracker/src/lib/rx-tracker.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponentComponent
  ],
  imports: [
    BrowserModule,
    RxTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

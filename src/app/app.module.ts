import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { DisplayComponent } from './display/display.component';
import { RotateComponent } from './rotate/rotate.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    DisplayComponent,
    RotateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

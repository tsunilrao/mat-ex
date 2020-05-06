import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToolbarButtonModule } from 'mat-ex'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

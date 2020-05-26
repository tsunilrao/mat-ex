import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarButtonModule } from 'projects/mat-ex/src/lib/components/toolbar-button/toolbar-button.module';
import { DialogModule } from 'projects/mat-ex/src/lib/components/dialog/dialog.module';
import { ModalDialogModule } from 'projects/mat-ex/src/lib/components/modal-dialog/modal-dialog.module';
import { MatButtonModule } from '@angular/material/button'
import { MtxProfileModule } from 'projects/mat-ex/src/lib/mtx-profile/mtx-profile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarButtonModule,
    ModalDialogModule,
    DialogModule,
    MatButtonModule,
    MtxProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

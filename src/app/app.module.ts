import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarButtonModule } from 'projects/mat-ex/src/lib/components/toolbar-button/toolbar-button.module';
import { MatButtonModule } from '@angular/material/button'
import { MtxProfileModule } from 'projects/mat-ex/src/lib/mtx-profile/mtx-profile.module';
import { MatIconModule } from '@angular/material/icon';
import { MtxFeatureBarModule } from 'projects/mat-ex/src/lib/mtx-feature-bar/mtx-feature-bar.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MtxModalModule } from 'projects/mat-ex/src/lib/mtx-modal/mtx-modal.module';
import { MtxDialogModule } from 'projects/mat-ex/src/lib/mtx-dialog/mtx-dialog.module';
import { MtxPageModule } from 'projects/mat-ex/src/lib/mtx-page/mtx-page.module';
import { MtxAppBarModule } from 'projects/mat-ex/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarButtonModule,
    MatButtonModule,
    MatProgressBarModule,
    MtxProfileModule,
    MatIconModule,
    MtxFeatureBarModule,
    MatMenuModule,
    MtxModalModule,
    MtxDialogModule,
    MtxPageModule,
    MtxAppBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

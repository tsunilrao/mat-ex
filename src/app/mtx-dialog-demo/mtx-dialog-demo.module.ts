import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxDialogDemoRoutingModule } from './mtx-dialog-demo-routing.module';
import { MtxDialogDemoComponent } from './mtx-dialog-demo/mtx-dialog-demo.component';
import { MtxAppBarModule, MtxDialogModule, MtxPageModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MtxDialogDemoComponent],
  imports: [
    CommonModule, FooterSectionModule, MatButtonModule,
    MtxDialogDemoRoutingModule, MtxPageModule, MtxAppBarModule, MtxDialogModule
  ]
})
export class MtxDialogDemoModule { }

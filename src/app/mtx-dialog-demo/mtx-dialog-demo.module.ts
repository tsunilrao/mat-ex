import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxDialogDemoRoutingModule } from './mtx-dialog-demo-routing.module';
import { MtxDialogDemoComponent } from './mtx-dialog-demo/mtx-dialog-demo.component';
import { MtxAppBarModule, MtxCardModule, MtxContainerModule, MtxDialogModule, MtxPageModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [MtxDialogDemoComponent],
  imports: [
    CommonModule, FooterSectionModule, MatButtonModule, MatIconModule, MatTooltipModule,
    MtxDialogDemoRoutingModule, MtxPageModule, MtxAppBarModule, MtxDialogModule, MtxCardModule, MtxContainerModule
  ]
})
export class MtxDialogDemoModule { }

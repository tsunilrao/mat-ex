import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxIconDemoRoutingModule } from './mtx-icon-demo-routing.module';
import { MtxIconDemoComponent } from './mtx-icon-demo.component';
import { MtxAppBarModule, MtxCardModule, MtxCodeblockModule, MtxContainerModule, MtxPageModule, MtxTextModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MtxIconModule } from 'projects/mat-ex/src/lib/mtx-icon/mtx-icon.module';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [MtxIconDemoComponent],
  imports: [
    CommonModule,
    MtxIconDemoRoutingModule,
    MtxPageModule, MtxAppBarModule, MtxIconModule, MtxTextModule, MtxContainerModule, MtxCardModule, MtxToolbarModule, MtxCodeblockModule,
    MatDividerModule,
    FooterSectionModule
  ]
})
export class MtxIconDemoModule { }

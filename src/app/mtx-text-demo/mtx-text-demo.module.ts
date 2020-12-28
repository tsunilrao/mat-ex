import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxTextDemoRoutingModule } from './mtx-text-demo-routing.module';
import { MtxTextDemoComponent } from './mtx-text-demo.component';
import { MtxPageModule, MtxAppBarModule, MtxToolbarModule, MtxTextModule, MtxContainerModule, MtxCardModule, MtxCodeblockModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [MtxTextDemoComponent],
  imports: [
    CommonModule,
    MtxTextDemoRoutingModule,
    FooterSectionModule,
    MtxPageModule,
    MtxAppBarModule,
    MtxToolbarModule,
    MtxTextModule,
    MtxContainerModule,
    MtxCardModule,
    MtxCodeblockModule,
    MatDividerModule
  ]
})
export class MtxTextDemoModule { }

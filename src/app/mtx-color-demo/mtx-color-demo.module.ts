import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxColorDemoRoutingModule } from './mtx-color-demo-routing.module';
import { MtxColorDemoComponent } from './mtx-color-demo.component';
import { MtxAppBarModule, MtxCardModule, MtxContainerModule, MtxPageModule, MtxTextModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MtxColorDemoComponent],
  imports: [
    CommonModule,
    MtxColorDemoRoutingModule,
    MtxPageModule,
    MtxAppBarModule,
    MtxContainerModule,
    MtxTextModule,
    MtxToolbarModule,
    MtxCardModule,
    MatDividerModule,
    FooterSectionModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MtxColorDemoModule { }

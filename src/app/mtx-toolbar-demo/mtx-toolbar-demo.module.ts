import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxToolbarDemoRoutingModule } from './mtx-toolbar-demo-routing.module';
import { MtxToolbarDemoComponent } from './mtx-toolbar-demo.component';
import { MtxAppBarModule, MtxPageModule, MtxTextModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';


@NgModule({
  declarations: [MtxToolbarDemoComponent],
  imports: [
    CommonModule,
    MtxToolbarDemoRoutingModule,
    FooterSectionModule,
    MtxPageModule,
    MtxAppBarModule,
    MtxToolbarModule,
    MtxTextModule
  ]
})
export class MtxToolbarDemoModule { }

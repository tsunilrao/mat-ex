import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxColorDemoRoutingModule } from './mtx-color-demo-routing.module';
import { MtxColorDemoComponent } from './mtx-color-demo.component';


@NgModule({
  declarations: [MtxColorDemoComponent],
  imports: [
    CommonModule,
    MtxColorDemoRoutingModule
  ]
})
export class MtxColorDemoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxDemoRoutingModule } from './mtx-demo-routing.module';
import { MtxDemoComponent } from './mtx-demo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MtxDemoComponent],
  imports: [
    CommonModule, SharedModule,
    MtxDemoRoutingModule,
  ]
})
export class MtxDemoModule { }

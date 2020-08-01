import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxPageDemoComponent } from './mtx-page-demo.component';
import { MtxPageDemoRoutingModule } from './mtx-page-demo-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MtxPageDemoComponent],
  imports: [
    CommonModule, SharedModule, MtxPageDemoRoutingModule
  ]
})
export class MtxPageDemoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxPageDemoComponent } from './mtx-page-demo.component';
import { MtxPageDemoRoutingModule } from './mtx-page-demo-routing.module';
import { MtxPageModule, MtxBottomNavModule, MtxAppBarModule } from 'projects/mat-ex/src/public-api';



@NgModule({
  declarations: [MtxPageDemoComponent],
  imports: [
    CommonModule, MtxPageDemoRoutingModule,
    MtxPageModule, MtxBottomNavModule, MtxAppBarModule
  ]
})
export class MtxPageDemoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxScrollerComponent } from './mtx-scroller/mtx-scroller.component';



@NgModule({
  declarations: [MtxScrollerComponent],
  imports: [
    CommonModule
  ], 
  exports: [MtxScrollerComponent]
})
export class MtxScrollerModule { }

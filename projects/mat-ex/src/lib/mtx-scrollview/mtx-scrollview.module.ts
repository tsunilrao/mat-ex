import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxScrollviewComponent } from './mtx-scrollview/mtx-scrollview.component';



@NgModule({
  declarations: [MtxScrollviewComponent],
  imports: [
    CommonModule
  ], 
  exports: [MtxScrollviewComponent]
})
export class MtxScrollviewModule { }

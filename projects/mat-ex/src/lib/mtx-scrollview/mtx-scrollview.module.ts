import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxScrollviewComponent } from './mtx-scrollview/mtx-scrollview.component';
import { MtxScrollviewItemComponent } from './mtx-scrollview-item/mtx-scrollview-item.component';



@NgModule({
  declarations: [MtxScrollviewComponent, MtxScrollviewItemComponent],
  imports: [
    CommonModule
  ], 
  exports: [MtxScrollviewComponent, MtxScrollviewItemComponent]
})
export class MtxScrollviewModule { }

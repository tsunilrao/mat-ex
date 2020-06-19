import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxPageComponent } from './mtx-page/mtx-page.component';



@NgModule({
  declarations: [MtxPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxPageComponent]
})
export class MtxPageModule { }

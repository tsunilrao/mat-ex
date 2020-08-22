import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxPageAreaComponent } from './mtx-page-area/mtx-page-area.component';
import { MtxPageComponent } from './mtx-page.component';



@NgModule({
  declarations: [MtxPageComponent, MtxPageAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxPageComponent, MtxPageAreaComponent]
})
export class MtxPageModule { }

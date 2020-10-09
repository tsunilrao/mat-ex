import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxTextComponent } from './mtx-text.component';



@NgModule({
  declarations: [MtxTextComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxTextComponent],
})
export class MtxTextModule { }

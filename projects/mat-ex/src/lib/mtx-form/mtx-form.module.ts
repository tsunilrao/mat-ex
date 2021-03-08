import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxFormComponent } from './mtx-form.component';



@NgModule({
  declarations: [MtxFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxFormComponent]
})
export class MtxFormModule { }

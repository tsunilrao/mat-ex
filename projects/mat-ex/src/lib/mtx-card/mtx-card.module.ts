import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxCardComponent } from './mtx-card.component';



@NgModule({
  declarations: [MtxCardComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxCardComponent]
})
export class MtxCardModule { }

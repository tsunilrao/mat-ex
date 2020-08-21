import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxContainerComponent } from './mtx-container.component';



@NgModule({
  declarations: [MtxContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxContainerComponent]
})
export class MtxContainerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxDrawerComponent } from './mtx-drawer.component';
import { MtxContainerModule } from '../mtx-container/mtx-container.module';



@NgModule({
  declarations: [MtxDrawerComponent],
  imports: [
    CommonModule, MtxContainerModule
  ],
  exports: [MtxDrawerComponent]
})
export class MtxDrawerModule { }

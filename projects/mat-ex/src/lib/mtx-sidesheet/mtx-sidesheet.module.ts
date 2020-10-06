import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxSidesheetComponent } from './mtx-sidesheet/mtx-sidesheet.component';
import { MtxSidesheetContainerComponent } from './mtx-sidesheet-container/mtx-sidesheet-container.component';



@NgModule({
  declarations: [MtxSidesheetComponent, MtxSidesheetContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxSidesheetComponent, MtxSidesheetContainerComponent]
})
export class MtxSidesheetModule { }

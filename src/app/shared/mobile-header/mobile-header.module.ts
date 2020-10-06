import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header.component';
import { MtxContainerModule } from 'projects/mat-ex/src/public-api';



@NgModule({
  declarations: [MobileHeaderComponent],
  imports: [
    CommonModule, MtxContainerModule
  ],
  exports: [MobileHeaderComponent]
})
export class MobileHeaderModule { }

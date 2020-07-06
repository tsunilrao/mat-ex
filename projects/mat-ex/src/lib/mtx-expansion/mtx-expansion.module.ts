import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxExpansionComponent } from './mtx-expansion/mtx-expansion.component';
import { MtxExpansionContentComponent } from './mtx-expansion-content/mtx-expansion-content.component';



@NgModule({
  declarations: [MtxExpansionComponent, MtxExpansionContentComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxExpansionComponent, MtxExpansionContentComponent]
})
export class MtxExpansionModule { }

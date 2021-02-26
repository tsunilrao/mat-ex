import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxIconComponent } from './mtx-icon.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MtxIconComponent],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [MtxIconComponent]
})
export class MtxIconModule { }

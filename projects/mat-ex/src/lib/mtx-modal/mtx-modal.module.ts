import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxModalComponent } from './mtx-modal/mtx-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [MtxModalComponent],
  imports: [
    CommonModule, MatDialogModule
  ],
  exports: [MtxModalComponent]
})
export class MtxModalModule { }

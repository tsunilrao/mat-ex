import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxDialogComponent } from './mtx-dialog.component';
import { MtxDialogIconComponent } from './mtx-dialog-icon/mtx-dialog-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MtxDialogComponentsComponent } from './mtx-dialog-components/mtx-dialog-components.component';



@NgModule({
  declarations: [MtxDialogComponent, MtxDialogIconComponent, MtxDialogComponentsComponent],
  imports: [
    CommonModule, MatButtonModule, MatIconModule
  ],
  exports: [MtxDialogComponent, MtxDialogIconComponent, MtxDialogComponentsComponent]
})
export class MtxDialogModule { }

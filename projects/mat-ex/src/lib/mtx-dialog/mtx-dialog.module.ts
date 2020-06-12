import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxDialogComponent } from './mtx-dialog/mtx-dialog.component';
import { MtxDialogTitleComponent } from './mtx-dialog-title/mtx-dialog-title.component';
import { MtxDialogIconComponent } from './mtx-dialog-icon/mtx-dialog-icon.component';
import { MtxDialogContentComponent } from './mtx-dialog-content/mtx-dialog-content.component';
import { MtxDialogActionsComponent } from './mtx-dialog-actions/mtx-dialog-actions.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MtxDialogComponent, MtxDialogTitleComponent, MtxDialogIconComponent,
    MtxDialogContentComponent, MtxDialogActionsComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule
  ],
  exports: [MtxDialogComponent, MtxDialogTitleComponent, MtxDialogIconComponent, MtxDialogContentComponent,
    MtxDialogActionsComponent]
})
export class MtxDialogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'



@NgModule({
  declarations: [ModalDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
  exports: [ModalDialogComponent],
})
export class ModalDialogModule { }

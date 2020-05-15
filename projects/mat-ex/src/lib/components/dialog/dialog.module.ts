import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogActionsComponent } from './dialog-actions/dialog-actions.component'



@NgModule({
  declarations: [DialogComponent, DialogTitleComponent, DialogContentComponent, DialogActionsComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [DialogComponent, DialogTitleComponent, DialogContentComponent, DialogActionsComponent],
})
export class DialogModule { }

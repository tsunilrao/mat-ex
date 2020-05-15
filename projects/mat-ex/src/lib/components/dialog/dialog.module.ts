import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogActionsComponent } from './dialog-actions/dialog-actions.component';
import { DialogIconComponent } from './dialog-icon/dialog-icon.component'
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DialogComponent, DialogTitleComponent, DialogIconComponent, DialogContentComponent, DialogActionsComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [DialogComponent, DialogTitleComponent, DialogIconComponent, DialogContentComponent, DialogActionsComponent],
})
export class DialogModule { }

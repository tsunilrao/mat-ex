import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarButtonComponent } from './toolbar-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ToolbarButtonComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ToolbarButtonComponent]
})
export class ToolbarButtonModule { }

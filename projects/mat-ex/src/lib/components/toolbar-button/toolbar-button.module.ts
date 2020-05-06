import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarButtonComponent } from './toolbar-button.component';



@NgModule({
  declarations: [ToolbarButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarButtonComponent]
})
export class ToolbarButtonModule { }

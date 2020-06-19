import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxAppBarComponent } from './mtx-app-bar/mtx-app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [MtxAppBarComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule
  ],
  exports: [MtxAppBarComponent]
})
export class MtxAppBarModule { }

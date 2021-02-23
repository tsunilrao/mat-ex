import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxAppBarComponent } from './mtx-app-bar/mtx-app-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MtxAppBarTitleComponent } from './mtx-app-bar-title/mtx-app-bar-title.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [MtxAppBarComponent, MtxAppBarTitleComponent],
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule
  ],
  exports: [MtxAppBarComponent, MtxAppBarTitleComponent]
})
export class MtxAppBarModule { }

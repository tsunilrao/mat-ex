import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxAppBarComponent } from './mtx-app-bar/mtx-app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MtxAppBarTitleComponent } from './mtx-app-bar-title/mtx-app-bar-title.component';
import { MtxAppBarButtonComponent } from './mtx-app-bar-button/mtx-app-bar-button.component';
import { MtxAppBarProminentComponent } from './mtx-app-bar-prominent/mtx-app-bar-prominent.component';



@NgModule({
  declarations: [MtxAppBarComponent, MtxAppBarTitleComponent, MtxAppBarButtonComponent, MtxAppBarProminentComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule
  ],
  exports: [MtxAppBarComponent, MtxAppBarTitleComponent, MtxAppBarButtonComponent]
})
export class MtxAppBarModule { }

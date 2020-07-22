import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxBottomNavComponent } from './mtx-bottom-nav.component';
import { MtxBottomNavItemComponent } from './mtx-bottom-nav-item/mtx-bottom-nav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [MtxBottomNavComponent, MtxBottomNavItemComponent],
  imports: [
    CommonModule, MatIconModule, MatToolbarModule, MatRippleModule
  ],
  exports: [MtxBottomNavComponent, MtxBottomNavItemComponent]
})
export class MtxBottomNavModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxNavComponent } from './mtx-nav.component';
import { MtxNavItemComponent } from './mtx-nav-item/mtx-nav-item.component';
import { MatRippleModule } from '@angular/material/core';
import { MtxToolbarModule } from '../mtx-toolbar/mtx-toolbar.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MtxNavComponent, MtxNavItemComponent],
  imports: [
    CommonModule,
    MatRippleModule, MatIconModule,
    MtxToolbarModule
  ],
  exports: [MtxNavComponent, MtxNavItemComponent]
})
export class MtxNavModule { }

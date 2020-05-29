import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxFeatureBarComponent } from './mtx-feature-bar/mtx-feature-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [MtxFeatureBarComponent],
  imports: [
    CommonModule, MatDividerModule, MatButtonModule, MatIconModule, MatMenuModule
  ], 
  exports: [MtxFeatureBarComponent]
})
export class MtxFeatureBarModule { }

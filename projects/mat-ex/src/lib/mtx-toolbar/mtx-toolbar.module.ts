import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxToolbarComponent } from './mtx-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MtxContainerModule } from '../mtx-container/mtx-container.module';
import { MtxIconModule } from '../mtx-icon/mtx-icon.module';



@NgModule({
  declarations: [MtxToolbarComponent],
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MtxContainerModule, MtxIconModule
  ],
  exports: [MtxToolbarComponent]
})
export class MtxToolbarModule { }

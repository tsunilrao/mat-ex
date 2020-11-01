import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxLoaderComponent } from './mtx-loader.component';
import { MtxModalModule } from '../mtx-modal/mtx-modal.module';
import { MtxCardModule } from '../mtx-card/mtx-card.module';
import { MtxTextModule } from '../mtx-text/mtx-text.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [MtxLoaderComponent],
  imports: [
    CommonModule, MtxModalModule, MtxCardModule, MtxTextModule, MatProgressSpinnerModule
  ],
  exports: [MtxLoaderComponent]
})
export class MtxLoaderModule { }

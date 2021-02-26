import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScrollviewCardComponent } from './home-scrollview-card.component';
import { MtxCardModule, MtxTextModule, MtxContainerModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';



@NgModule({
  declarations: [HomeScrollviewCardComponent],
  imports: [
    CommonModule,
    MtxCardModule, MtxTextModule, MtxContainerModule, MtxToolbarModule
  ],
  exports: [HomeScrollviewCardComponent]
})
export class HomeScrollviewCardModule { }

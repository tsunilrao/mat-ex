import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScrollviewCardComponent } from './home-scrollview-card.component';
import { MtxCardModule, MtxTextModule, MtxContainerModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [HomeScrollviewCardComponent],
  imports: [
    CommonModule,
    MtxCardModule, MtxTextModule, MtxContainerModule, MtxToolbarModule,
    MatRippleModule
  ],
  exports: [HomeScrollviewCardComponent]
})
export class HomeScrollviewCardModule { }

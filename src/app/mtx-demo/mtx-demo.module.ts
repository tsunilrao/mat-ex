import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxDemoRoutingModule } from './mtx-demo-routing.module';
import { MtxDemoComponent } from './mtx-demo.component';
import { MtxPageModule, MtxAppBarModule } from 'projects/mat-ex/src/public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MtxDemoLandingSectionComponent } from './mtx-demo-landing-section/mtx-demo-landing-section.component';
import { MtxDemoFeaturesSectionComponent } from './mtx-demo-features-section/mtx-demo-features-section.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [MtxDemoComponent, MtxDemoLandingSectionComponent, MtxDemoFeaturesSectionComponent],
  imports: [
    CommonModule, MtxDemoRoutingModule,
    MtxPageModule, MtxAppBarModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule
  ]
})
export class MtxDemoModule { }

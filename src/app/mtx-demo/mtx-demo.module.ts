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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxDemoComponentsSectionComponent } from './mtx-demo-components-section/mtx-demo-components-section.component';
import { MtxDemoGuidesSectionComponent } from './mtx-demo-guides-section/mtx-demo-guides-section.component';


@NgModule({
  declarations: [
    MtxDemoComponent, MtxDemoLandingSectionComponent, MtxDemoFeaturesSectionComponent, 
    MtxDemoComponentsSectionComponent, MtxDemoGuidesSectionComponent
  ],
  imports: [
    CommonModule, MtxDemoRoutingModule,
    MtxPageModule, MtxAppBarModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatTooltipModule
  ]
})
export class MtxDemoModule { }

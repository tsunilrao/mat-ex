import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MtxPageModule, MtxAppBarModule, MtxScrollviewModule, MtxProfileModule } from 'projects/mat-ex/src/public-api';
import { HomeHeroSectionComponent } from './home-hero-section/home-hero-section.component';
import { HomeFeaturesSectionComponent } from './home-features-section/home-features-section.component';
import { HomeComponentsSectionComponent } from './home-components-section/home-components-section.component';
import { HomeGuidesSectionComponent } from './home-guides-section/home-guides-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent, HomeHeroSectionComponent, HomeFeaturesSectionComponent, 
    HomeComponentsSectionComponent, HomeGuidesSectionComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule,
    MtxPageModule, MtxAppBarModule, MtxScrollviewModule, MtxProfileModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatTooltipModule,
    MatCardModule
  ]
})
export class HomeModule { }
